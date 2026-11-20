"use client"

import { T as AdminText } from "@/components/i18n-text";
import { useState } from "react"
import { UAE_EMIRATES } from "@/lib/locations"
import { useLanguage } from "@/components/language-provider"
import {
  CheckCircle2,
  DollarSign,
  MapPin,
  Phone,
  PlusCircle,
  Smartphone,
  User,
  UserCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type AdminTechnicianOption } from "./order-types"

const POPULAR_DEVICES = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 / 15 Plus",
  "iPhone 14 Pro Max",
  "iPhone 13 Pro Max",
  "MacBook Pro 16\" M3 Max",
  "MacBook Air 15\" M3",
  "MacBook Pro 14\" M2",
  "Samsung Galaxy S24 Ultra",
  "Samsung Galaxy S23 Ultra",
  "iPad Pro 12.9\" (M2/M4)",
  "PlayStation 5 (PS5)",
]

const POPULAR_SERVICES = [
  "Screen Replacement & OLED Calibration",
  "Battery Replacement & Health Restore",
  "Back Glass & Housing Restoration",
  "Water / Liquid Damage Treatment",
  "Logic Board & IC Micro-Soldering",
  "Camera Lens & Sensor Replacement",
  "Charging Port & Power IC Repair",
  "Full Diagnostic & Performance Overhaul",
]


export function CreateOrderDialog({
  open,
  technicians,
  saving,
  onOpenChange,
  onCreate,
}: {
  open: boolean
  technicians: AdminTechnicianOption[]
  saving: boolean
  onOpenChange: (_open: boolean) => void
  onCreate: (_data: Record<string, unknown>) => Promise<boolean>
}) {
  const { lang } = useLanguage()
  const isAr = lang === "ar"
  const [emirateId, setEmirateId] = useState("")
  const emirate = UAE_EMIRATES.find(item => item.id === emirateId)
  // Form State
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  
  const [selectedArea, setSelectedArea] = useState("")
  const [address, setAddress] = useState("")
  
  const [device, setDevice] = useState("")
  const [service, setService] = useState("")
  const [price, setPrice] = useState("")
  const [priority, setPriority] = useState<"NORMAL" | "HIGH" | "URGENT" | "LOW">("NORMAL")
  
  const [timeSlot, setTimeSlot] = useState("Immediate / ASAP")
  const [scheduledDate, setScheduledDate] = useState(new Date().toISOString().split("T")[0])
  const [notes, setNotes] = useState("")

  const [selectedTechIds, setSelectedTechIds] = useState<string[]>([])

  const resetForm = () => {
    setCustomerName("")
    setCustomerPhone("")
    setCustomerEmail("")
    setSelectedArea("")
    setEmirateId("")
    setAddress("")
    setDevice("")
    setService("")
    setPrice("")
    setPriority("NORMAL")
    setTimeSlot("Immediate / ASAP")
    setScheduledDate(new Date().toISOString().split("T")[0])
    setNotes("")
    setSelectedTechIds([])
  }

  const handleAreaChange = (areaName: string) => {
    setSelectedArea(areaName)
  }

  const toggleTechnician = (id: string) => {
    setSelectedTechIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const parsedPrice = Number(price)
    if (!emirate || !selectedArea.trim() || !customerName.trim() || !customerPhone.trim() || !address.trim() || !device.trim() || !service.trim() || !Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      return
    }

    const matchedArea = emirate?.areas.find(a => a.nameEn === selectedArea || a.nameAr === selectedArea)
    const selectedTechs = technicians.filter((t) => selectedTechIds.includes(t.id))

    const created = await onCreate({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim(),
      area: selectedArea.trim(),
      emirate: emirate?.nameEn,
      emirateId,
      address: address.trim(),
      latitude: matchedArea?.latitude,
      longitude: matchedArea?.longitude,
      device: device.trim(),
      service: service.trim(),
      price: parsedPrice,
      totalAmount: parsedPrice,
      serviceAmount: parsedPrice,
      priority: priority,
      timeSlot: timeSlot,
      scheduledDate: scheduledDate,
      notes: notes.trim(),
      technicianIds: selectedTechIds,
      technicianNames: selectedTechs.map((t) => t.name),
      technicianId: selectedTechIds[0] || "",
      technicianName: selectedTechs[0]?.name || "",
    })

    if (created) resetForm()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[96vw] sm:max-w-[95vw] md:max-w-[1040px] lg:max-w-[1120px] max-h-[92vh] p-0 bg-card border border-border shadow-2xl rounded-[24px] overflow-hidden text-card-foreground flex flex-col font-sans">
        {/* Header */}
        <DialogHeader className="shrink-0 border-b border-border bg-muted/30 px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <PlusCircle className="size-5" />
                </div>
                <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
                  <AdminText k="Create New Order" />
                </DialogTitle>
                <Badge variant="outline" className="bg-primary/10 border-primary/25 text-primary text-xs font-mono font-semibold">
                  AUTO-DISPATCH
                </Badge>
              </div>
              <DialogDescription className="text-xs text-muted-foreground">
                Register customer repair, specify device faults, set pricing, and assign certified field technicians.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 lg:px-8 py-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Customer & Pricing Details */}
            <div className="lg:col-span-6 space-y-5">
              {/* Section 1: Customer Information */}
              <div className="space-y-4 bg-muted/20 border border-border/70 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground border-b border-border/70 pb-2.5">
                  <User className="size-4 text-primary" />
                  <span><AdminText k="Customer Information" /></span>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Customer Full Name *</Label>
                    <Input
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Sarah Al Mansoori"
                      className="h-10 text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Phone Number (Mobile) *</Label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="h-10 pl-9 text-xs font-mono bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">{isAr ? "الإمارة والمنطقة *" : "Emirate & area *"}</Label>
                    <Select value={emirateId} onValueChange={value => { setEmirateId(value); setSelectedArea("") }}>
                      <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder={isAr ? "اختر الإمارة" : "Select emirate"} /></SelectTrigger>
                      <SelectContent>{UAE_EMIRATES.map(item => <SelectItem key={item.id} value={item.id}>{isAr ? item.nameAr : item.nameEn}</SelectItem>)}</SelectContent>
                    </Select>
                    <Input required disabled={!emirate} list="admin-order-areas" value={selectedArea} onChange={event => handleAreaChange(event.target.value)} placeholder={isAr ? "اختر المنطقة أو اكتب اسمها" : "Select or enter an area"} className="h-11 rounded-xl" />
                    <datalist id="admin-order-areas">{emirate?.areas.map(area => <option key={area.id} value={isAr ? area.nameAr : area.nameEn} />)}</datalist>
                    <p className="text-xs leading-relaxed text-muted-foreground">{isAr ? "يمكنك إدخال أي منطقة داخل الإمارة، ثم إضافة العنوان التفصيلي أدناه." : "Enter any area in the selected emirate, then add the full address below."}</p>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Email Address (Optional)</Label>
                    <Input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="customer@example.com"
                      className="h-10 text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground">Full Street Address / Apartment *</Label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Sky Tower Apt 2402, Al Reem Island, Abu Dhabi"
                      className="h-10 pl-9 text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Pricing & Scheduling */}
              <div className="space-y-4 bg-muted/20 border border-border/70 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground border-b border-border/70 pb-2.5">
                  <DollarSign className="size-4 text-primary" />
                  <span>Pricing & Scheduling</span>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Price (AED) *</Label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-muted-foreground font-mono">
                        AED
                      </span>
                      <Input
                        required
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="350"
                        className="h-10 pl-11 text-xs font-mono font-bold bg-background border-border rounded-xl text-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground"><AdminText k="Priority" /></Label>
                    <Select value={priority} onValueChange={(val) => setPriority(val as any)}>
                      <SelectTrigger className="h-10 text-xs bg-background border-border rounded-xl text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border text-popover-foreground">
                        <SelectItem value="NORMAL" className="text-xs"><AdminText k="Normal" /></SelectItem>
                        <SelectItem value="HIGH" className="text-xs text-amber-600 dark:text-amber-400 font-bold"><AdminText k="High" /></SelectItem>
                        <SelectItem value="URGENT" className="text-xs text-rose-600 dark:text-rose-400 font-bold">Urgent 🚨</SelectItem>
                        <SelectItem value="LOW" className="text-xs text-muted-foreground"><AdminText k="Low" /></SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground"><AdminText k="Preferred Time" /></Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger className="h-10 text-xs bg-background border-border rounded-xl text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border text-popover-foreground">
                        <SelectItem value="Immediate / ASAP" className="text-xs text-primary font-bold">Immediate / ASAP ⚡</SelectItem>
                        <SelectItem value="10:00 AM - 12:00 PM" className="text-xs">10:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12:00 PM - 02:00 PM" className="text-xs">12:00 PM - 02:00 PM</SelectItem>
                        <SelectItem value="02:00 PM - 04:00 PM" className="text-xs">02:00 PM - 04:00 PM</SelectItem>
                        <SelectItem value="04:00 PM - 06:00 PM" className="text-xs">04:00 PM - 06:00 PM</SelectItem>
                        <SelectItem value="06:00 PM - 08:00 PM" className="text-xs">06:00 PM - 08:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Device, Service & Field Technician Assignment */}
            <div className="lg:col-span-6 space-y-5">
              {/* Section 3: Device & Repair Details */}
              <div className="space-y-4 bg-muted/20 border border-border/70 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground border-b border-border/70 pb-2.5">
                  <Smartphone className="size-4 text-primary" />
                  <span><AdminText k="Device & Repair Details" /></span>
                </div>

                <div className="space-y-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Device Model *</Label>
                    <Input
                      required
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                      placeholder="e.g. iPhone 15 Pro Max"
                      className="h-10 text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                    {/* Preset Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {POPULAR_DEVICES.slice(0, 5).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDevice(d)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition border ${
                            device === d
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background hover:bg-muted text-muted-foreground border-border"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Service Type / Fault *</Label>
                    <Input
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g. Screen Replacement"
                      className="h-10 text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                    {/* Preset Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {POPULAR_SERVICES.slice(0, 4).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setService(s)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition border truncate max-w-[190px] ${
                            service === s
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background hover:bg-muted text-muted-foreground border-border"
                          }`}
                        >
                          {s.split(" & ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground">Diagnostic Notes / Problem Description</Label>
                    <Textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe cracks, water exposure, diagnostic codes or technician instructions..."
                      className="text-xs bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:border-primary resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Field Technician Assignment */}
              <div className="space-y-3.5 bg-muted/20 border border-border/70 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-border/70 pb-2.5">
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <UserCheck className="size-4 text-primary" />
                    <span>Assign Field Technician(s)</span>
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {selectedTechIds.length > 0
                      ? `${selectedTechIds.length} Selected`
                      : "Auto-Queue"}
                  </span>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 max-h-40 overflow-y-auto pr-1">
                  {technicians.length === 0 ? (
                    <div className="col-span-2 py-3 text-center text-xs text-muted-foreground">
                      No technician profiles found in database.
                    </div>
                  ) : (
                    technicians.map((t) => {
                      const isSelected = selectedTechIds.includes(t.id)
                      return (
                        <div
                          key={t.id}
                          onClick={() => toggleTechnician(t.id)}
                          className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition select-none ${
                            isSelected
                              ? "bg-primary/10 border-primary text-foreground shadow-xs font-semibold"
                              : "bg-background border-border text-foreground hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`size-2.5 rounded-full shrink-0 ${t.available ? "bg-emerald-500" : t.online ? "bg-amber-500" : "bg-slate-400"}`} />
                            <div className="truncate">
                              <p className="text-xs font-bold truncate leading-tight">{t.name}</p>
                              <p className="text-[10px] text-muted-foreground truncate">
                                {t.available ? "Online & Available" : t.online ? "Online (Busy)" : "Offline"}
                              </p>
                            </div>
                          </div>
                          {isSelected ? (
                            <CheckCircle2 className="size-4 text-primary shrink-0" />
                          ) : (
                            <div className="size-4 rounded-full border border-muted-foreground/30 shrink-0" />
                          )}
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{device}</span>
              <span>•</span>
              <span className="font-mono font-bold text-primary">AED {price || 0}</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="h-10 px-4 rounded-xl border-border hover:bg-muted text-foreground"
              >
                <AdminText k="Cancel" />
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="h-10 px-5 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 shadow-md shadow-primary/20"
              >
                {saving ? "Creating Order..." : "🚀 Create & Dispatch"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
