(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/glass-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function GlassCard({ children, className, hoverEffect = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group transition-transform duration-300 will-change-transform", hoverEffect && "glass-hover hover:-translate-y-1 hover:shadow-2xl", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ui/glass-card.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/glass-card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = GlassCard;
var _c;
__turbopack_context__.k.register(_c, "GlassCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Device data with brands, models, and issues
__turbopack_context__.s([
    "clearRepairTimes",
    ()=>clearRepairTimes,
    "devices",
    ()=>devices,
    "getAllRepairTimes",
    ()=>getAllRepairTimes,
    "getRepairTime",
    ()=>getRepairTime,
    "orderStatuses",
    ()=>orderStatuses,
    "removeRepairTime",
    ()=>removeRepairTime,
    "setRepairTime",
    ()=>setRepairTime
]);
const devices = [
    {
        id: "mobile",
        name: "Mobile Phone",
        icon: "Smartphone",
        brands: [
            {
                id: "apple",
                name: "Apple",
                models: [
                    "iPhone 15 Pro Max",
                    "iPhone 15 Pro",
                    "iPhone 15",
                    "iPhone 14 Pro Max",
                    "iPhone 14 Pro",
                    "iPhone 14",
                    "iPhone 13",
                    "iPhone 12",
                    "iPhone 11",
                    "iPhone SE"
                ]
            },
            {
                id: "samsung",
                name: "Samsung",
                models: [
                    "Galaxy S24 Ultra",
                    "Galaxy S24+",
                    "Galaxy S24",
                    "Galaxy S23 Ultra",
                    "Galaxy S23",
                    "Galaxy A54",
                    "Galaxy A34",
                    "Galaxy Z Fold 5",
                    "Galaxy Z Flip 5"
                ]
            },
            {
                id: "xiaomi",
                name: "Xiaomi",
                models: [
                    "Xiaomi 14 Ultra",
                    "Xiaomi 14",
                    "Redmi Note 13 Pro",
                    "Redmi Note 13",
                    "Poco F6 Pro",
                    "Poco X6 Pro"
                ]
            },
            {
                id: "huawei",
                name: "Huawei",
                models: [
                    "Mate 60 Pro",
                    "P60 Pro",
                    "Nova 12",
                    "Nova 11"
                ]
            },
            {
                id: "oppo",
                name: "OPPO",
                models: [
                    "Find X7 Ultra",
                    "Reno 11 Pro",
                    "A98"
                ]
            },
            {
                id: "vivo",
                name: "Vivo",
                models: [
                    "X100 Pro",
                    "V30 Pro",
                    "Y78"
                ]
            },
            {
                id: "oneplus",
                name: "OnePlus",
                models: [
                    "12",
                    "12R",
                    "Nord 3",
                    "Nord CE 3"
                ]
            },
            {
                id: "google",
                name: "Google",
                models: [
                    "Pixel 8 Pro",
                    "Pixel 8",
                    "Pixel 7a"
                ]
            }
        ],
        issues: [
            "Screen Replacement",
            "Battery Replacement",
            "Charging Port Repair",
            "Camera Replacement",
            "Speaker / Mic Fix",
            "Software Issues",
            "Water Damage",
            "Back Glass Replacement"
        ]
    },
    {
        id: "laptop",
        name: "Laptop",
        icon: "Laptop",
        brands: [
            {
                id: "apple-mac",
                name: "Apple MacBook",
                models: [
                    'MacBook Pro 16"',
                    'MacBook Pro 14"',
                    "MacBook Air M2",
                    "MacBook Air M1"
                ]
            },
            {
                id: "dell",
                name: "Dell",
                models: [
                    "XPS 15",
                    "XPS 13",
                    "Inspiron 15",
                    "Latitude 14"
                ]
            },
            {
                id: "hp",
                name: "HP",
                models: [
                    "Spectre x360",
                    "Pavilion 15",
                    "EliteBook",
                    "Omen 16"
                ]
            },
            {
                id: "lenovo",
                name: "Lenovo",
                models: [
                    "ThinkPad X1 Carbon",
                    "ThinkPad T14",
                    "IdeaPad",
                    "Legion 5"
                ]
            },
            {
                id: "asus",
                name: "ASUS",
                models: [
                    "ROG Zephyrus",
                    "ZenBook",
                    "VivoBook",
                    "TUF Gaming"
                ]
            },
            {
                id: "acer",
                name: "Acer",
                models: [
                    "Swift 5",
                    "Aspire 5",
                    "Nitro 5",
                    "Predator Helios"
                ]
            },
            {
                id: "msi",
                name: "MSI",
                models: [
                    "Stealth",
                    "Raider",
                    "Creator",
                    "Modern"
                ]
            }
        ],
        issues: [
            "Fan Cleaning & Thermal Paste",
            "Keyboard Replacement",
            "Screen Replacement",
            "USB / HDMI Port Repair",
            "Windows Installation",
            "Overheating Fix",
            "SSD/RAM Upgrade",
            "Battery Replacement",
            "Motherboard Repair"
        ]
    },
    {
        id: "pc",
        name: "PC / Desktop Computer",
        icon: "Monitor",
        brands: [
            {
                id: "dell-pc",
                name: "Dell",
                models: [
                    "OptiPlex",
                    "Precision",
                    "Vostro",
                    "Alienware"
                ]
            },
            {
                id: "hp-pc",
                name: "HP",
                models: [
                    "ProDesk",
                    "EliteDesk",
                    "Pavilion Desktop",
                    "OMEN Desktop"
                ]
            },
            {
                id: "lenovo-pc",
                name: "Lenovo",
                models: [
                    "ThinkCentre",
                    "IdeaCentre",
                    "Legion Tower"
                ]
            },
            {
                id: "asus-pc",
                name: "ASUS",
                models: [
                    "ROG",
                    "TUF",
                    "ProArt",
                    "ExpertCenter"
                ]
            },
            {
                id: "acer-pc",
                name: "Acer",
                models: [
                    "Aspire Desktop",
                    "Nitro",
                    "Predator"
                ]
            },
            {
                id: "msi-pc",
                name: "MSI",
                models: [
                    "MEG Trident",
                    "MAG Infinite",
                    "PRO"
                ]
            },
            {
                id: "samsung-pc",
                name: "Samsung",
                models: [
                    "Desktop Series"
                ]
            },
            {
                id: "huawei-pc",
                name: "Huawei",
                models: [
                    "MateStation"
                ]
            },
            {
                id: "custom-pc",
                name: "Custom Build (PC Tower)",
                models: [
                    "ATX Tower",
                    "MicroATX",
                    "Mini-ITX"
                ]
            }
        ],
        issues: [
            "Hardware: Power Supply Issue",
            "Hardware: No Display",
            "Hardware: Overheating",
            "Hardware: CPU Fan Replacement",
            "Hardware: RAM Upgrade / Replacement",
            "Hardware: SSD Upgrade / OS Install",
            "Hardware: GPU Issue / No Signal",
            "Hardware: Motherboard Repair",
            "Software: Windows Installation",
            "Software: Virus Removal",
            "Software: System Slow",
            "Software: Driver Issues",
            "Software: BIOS Errors",
            "Physical: Broken Ports (USB / HDMI)",
            "Physical: Front Panel Not Working",
            "Physical: PSU Noise"
        ]
    },
    {
        id: "printer",
        name: "Printer",
        icon: "Printer",
        brands: [
            {
                id: "hp-printer",
                name: "HP",
                models: [
                    "LaserJet Pro",
                    "OfficeJet Pro",
                    "DeskJet",
                    "ENVY"
                ]
            },
            {
                id: "canon",
                name: "Canon",
                models: [
                    "PIXMA",
                    "imageCLASS",
                    "MAXIFY"
                ]
            },
            {
                id: "epson",
                name: "Epson",
                models: [
                    "EcoTank",
                    "WorkForce",
                    "Expression"
                ]
            },
            {
                id: "brother",
                name: "Brother",
                models: [
                    "MFC Series",
                    "HL Series",
                    "DCP Series"
                ]
            }
        ],
        issues: [
            "Ink & Toner Issues",
            "Paper Jam Fix",
            "Cleaning & Maintenance",
            "Laser Printer Repair",
            "Inkjet Printer Repair",
            "Print Quality Issues",
            "Connectivity Issues"
        ]
    },
    {
        id: "tv",
        name: "TV",
        icon: "Tv",
        brands: [
            {
                id: "samsung-tv",
                name: "Samsung",
                models: [
                    "Neo QLED 8K",
                    "Neo QLED 4K",
                    "Crystal UHD",
                    "The Frame"
                ]
            },
            {
                id: "sony-tv",
                name: "Sony",
                models: [
                    "BRAVIA XR",
                    "BRAVIA 4K",
                    "X Series"
                ]
            },
            {
                id: "lg-tv",
                name: "LG",
                models: [
                    "OLED evo",
                    "QNED",
                    "NanoCell",
                    "UHD"
                ]
            },
            {
                id: "hisense",
                name: "Hisense",
                models: [
                    "ULED",
                    "Laser TV",
                    "4K Series"
                ]
            },
            {
                id: "tcl",
                name: "TCL",
                models: [
                    "QM8",
                    "Q7",
                    "S4"
                ]
            },
            {
                id: "philips",
                name: "Philips",
                models: [
                    "OLED+",
                    "The One",
                    "PUS Series"
                ]
            },
            {
                id: "panasonic",
                name: "Panasonic",
                models: [
                    "JZ OLED",
                    "JX LED",
                    "LX Series"
                ]
            },
            {
                id: "sharp",
                name: "Sharp",
                models: [
                    "Aquos",
                    "XLED"
                ]
            }
        ],
        issues: [
            "TV Not Turning On",
            "Lines on Screen",
            "HDMI Port Repair",
            "Software / System Issue",
            "Sound Issues",
            "Backlight Repair",
            "Screen Replacement"
        ]
    },
    {
        id: "apple-watch",
        name: "Apple Watch",
        icon: "Watch",
        brands: [
            {
                id: "apple-watch",
                name: "Apple",
                models: [
                    "Apple Watch Ultra 2",
                    "Apple Watch Series 9",
                    "Apple Watch SE",
                    "Apple Watch Series 8",
                    "Apple Watch Series 7"
                ]
            }
        ],
        issues: [
            "Screen Replacement",
            "Battery Replacement",
            "Crown Repair",
            "Sensor Issues",
            "Water Damage",
            "Pairing Issues"
        ]
    },
    {
        id: "gaming",
        name: "PlayStation / Xbox",
        icon: "Gamepad2",
        brands: [
            {
                id: "playstation",
                name: "PlayStation",
                models: [
                    "PS5",
                    "PS5 Digital",
                    "PS4 Pro",
                    "PS4 Slim"
                ]
            },
            {
                id: "xbox",
                name: "Xbox",
                models: [
                    "Xbox Series X",
                    "Xbox Series S",
                    "Xbox One X",
                    "Xbox One S"
                ]
            },
            {
                id: "nintendo",
                name: "Nintendo",
                models: [
                    "Switch OLED",
                    "Switch",
                    "Switch Lite"
                ]
            }
        ],
        issues: [
            "HDMI Port Repair",
            "Overheating Fix",
            "Disc Drive Repair",
            "Controller Sync Issues",
            "Power Issues",
            "Software / System Issues",
            "SSD Upgrade"
        ]
    },
    {
        id: "cctv",
        name: "CCTV",
        icon: "Camera",
        brands: [
            {
                id: "hikvision",
                name: "Hikvision",
                models: [
                    "DS-2CD Series",
                    "ColorVu",
                    "AcuSense"
                ]
            },
            {
                id: "dahua",
                name: "Dahua",
                models: [
                    "IPC-HDW Series",
                    "IPC-HFW Series",
                    "XVR Series"
                ]
            },
            {
                id: "uniview",
                name: "Uniview",
                models: [
                    "Prime Series",
                    "Easy Series"
                ]
            },
            {
                id: "ezviz",
                name: "Ezviz",
                models: [
                    "C6N",
                    "C3W",
                    "DB1C"
                ]
            },
            {
                id: "cpplus",
                name: "CP Plus",
                models: [
                    "E Series",
                    "G Series"
                ]
            },
            {
                id: "imou",
                name: "IMOU",
                models: [
                    "Ranger Series",
                    "Bullet Series"
                ]
            },
            {
                id: "tplink-cctv",
                name: "TP-Link",
                models: [
                    "Tapo C200",
                    "Tapo C310",
                    "VIGI"
                ]
            },
            {
                id: "samsung-cctv",
                name: "Samsung CCTV",
                models: [
                    "Wisenet",
                    "SDH Series"
                ]
            }
        ],
        issues: [
            "Full CCTV Installation",
            "DVR / NVR Setup",
            "Camera Not Working",
            "No Signal",
            "Night Vision Issues",
            "WiFi / Connectivity Fix",
            "Add New Cameras",
            "Camera Upgrade"
        ]
    },
    {
        id: "tv-install",
        name: "TV Installation",
        icon: "MonitorUp",
        brands: [
            {
                id: "samsung-install",
                name: "Samsung",
                models: [
                    '32" - 43"',
                    '50" - 55"',
                    '65" - 75"',
                    '85"+'
                ]
            },
            {
                id: "sony-install",
                name: "Sony",
                models: [
                    '32" - 43"',
                    '50" - 55"',
                    '65" - 75"',
                    '85"+'
                ]
            },
            {
                id: "lg-install",
                name: "LG",
                models: [
                    '32" - 43"',
                    '50" - 55"',
                    '65" - 75"',
                    '85"+'
                ]
            },
            {
                id: "other-install",
                name: "Other Brand",
                models: [
                    '32" - 43"',
                    '50" - 55"',
                    '65" - 75"',
                    '85"+'
                ]
            }
        ],
        issues: [
            "TV Wall Mount Installation",
            "Smart TV Setup",
            "Cable Management",
            "Soundbar Installation",
            "Full Home Theater Setup"
        ]
    },
    {
        id: "tablet",
        name: "iPad / Tablet",
        icon: "Laptop",
        brands: [
            {
                id: "apple-ipad",
                name: "Apple iPad",
                models: [
                    "iPad (2018)",
                    "iPad (2019)",
                    "iPad (2020)",
                    "iPad Air (2022)"
                ]
            },
            {
                id: "samsung-tab",
                name: "Samsung Galaxy Tab",
                models: [
                    "Galaxy Tab S9",
                    "Galaxy Tab S8",
                    "Galaxy Tab A8"
                ]
            }
        ],
        issues: [
            "Screen Replacement",
            "Battery Replacement",
            "Charging Port Repair",
            "Camera Replacement",
            "Software Issues",
            "Water Damage",
            "Not Turning On"
        ]
    }
];
const orderStatuses = [
    {
        id: 1,
        name: "Order Created",
        description: "Your order has been received"
    },
    {
        id: 2,
        name: "Technician Assigned",
        description: "A technician has been assigned to your order"
    },
    {
        id: 3,
        name: "Technician On the Way",
        description: "Your technician is heading to your location"
    },
    {
        id: 4,
        name: "Diagnostic in Progress",
        description: "We're diagnosing your device"
    },
    {
        id: 5,
        name: "Repair in Progress",
        description: "Your device is being repaired"
    },
    {
        id: 6,
        name: "Quality Check",
        description: "Final quality assurance check"
    },
    {
        id: 7,
        name: "Completed / Delivered",
        description: "Your repair is complete!"
    }
];
const repairTimesKey = "repairTimes";
function getAllRepairTimes() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = localStorage.getItem(repairTimesKey);
    if (!raw) return {};
    try {
        return JSON.parse(raw);
    } catch  {
        return {};
    }
}
function setRepairTime(deviceId, issue, minutes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const map = getAllRepairTimes();
    map[`${deviceId}|${issue}`] = minutes;
    localStorage.setItem(repairTimesKey, JSON.stringify(map));
}
function removeRepairTime(deviceId, issue) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const map = getAllRepairTimes();
    delete map[`${deviceId}|${issue}`];
    localStorage.setItem(repairTimesKey, JSON.stringify(map));
}
function clearRepairTimes() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(repairTimesKey);
}
function getRepairTime(deviceId, issue) {
    const map = getAllRepairTimes();
    const key = `${deviceId}|${issue}`;
    if (map[key] != null) return map[key];
    if (issue.startsWith("Hardware:")) return 90;
    if (issue.startsWith("Software:")) return 60;
    if (issue.startsWith("Physical:")) return 75;
    return 60;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/image-upload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageUpload",
    ()=>ImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ImageUpload({ value, onChange, disabled, path = "uploads" }) {
    _s();
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleUpload = async (e)=>{
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        setIsUploading(true);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
                // Simulate upload
                await new Promise((resolve)=>setTimeout(resolve, 1500));
                onChange("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"); // Mock Image
            } else {
                const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], `${path}/${Date.now()}_${file.name}`);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, file);
                const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
                onChange(url);
            }
        } catch (error) {
            alert("Upload failed");
        } finally{
            setIsUploading(false);
        }
    };
    if (value) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-32 h-32 rounded-xl overflow-hidden border border-white/10 group bg-black/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: value,
                    alt: "Upload",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/ui/image-upload.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(""),
                    className: "absolute top-1 right-1 p-1 bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500",
                    type: "button",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/image-upload.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/image-upload.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/image-upload.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                disabled: disabled || isUploading,
                onClick: ()=>document.getElementById("image-upload-input")?.click(),
                className: "bg-white/5 border-white/10 h-32 w-32 flex flex-col items-center justify-center gap-2 hover:bg-white/10",
                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-6 h-6 animate-spin text-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/components/ui/image-upload.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "w-6 h-6 text-white/50"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/image-upload.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-white/50",
                            children: "Upload Icon"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/image-upload.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/ui/image-upload.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: "image-upload-input",
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: handleUpload,
                disabled: disabled || isUploading
            }, void 0, false, {
                fileName: "[project]/components/ui/image-upload.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/image-upload.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(ImageUpload, "iM8/aiMEO5Xrk8fXFL7kjRs1wVs=");
_c = ImageUpload;
var _c;
__turbopack_context__.k.register(_c, "ImageUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/inventory/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminInventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/glass-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$image$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/image-upload.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function AdminInventoryPage() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("devices");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Firestore Data
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [issues, setIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // UI State
    const [newDeviceName, setNewDeviceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDeviceIcon, setNewDeviceIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("") // Empty by default
    ;
    const [selectedDeviceId, setSelectedDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newBrandName, setNewBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newModelName, setNewModelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issueDeviceId, setIssueDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newIssueName, setNewIssueName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newIssueDuration, setNewIssueDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("30");
    // Real-time Listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            // Auth guard
            if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
                const u = ("TURBOPACK compile-time truthy", 1) ? window.localStorage.getItem("mock_admin_user") : "TURBOPACK unreachable";
                if (!u) {
                    if ("TURBOPACK compile-time truthy", 1) window.location.replace("/admin/login");
                    return;
                }
                setAuthorized(true);
            } else {
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                    "AdminInventoryPage.useEffect.unsub": (user)=>{
                        if (!user) {
                            if ("TURBOPACK compile-time truthy", 1) window.location.replace("/admin/login");
                        } else {
                            setAuthorized(true);
                        }
                    }
                }["AdminInventoryPage.useEffect.unsub"]);
                return ({
                    "AdminInventoryPage.useEffect": ()=>unsub()
                })["AdminInventoryPage.useEffect"];
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
                const mockDevices = [
                    {
                        id: "d1",
                        name: "Smartphone",
                        icon: "Smartphone"
                    }
                ];
                const mockBrands = [
                    {
                        id: "b1",
                        deviceId: "d1",
                        name: "Apple"
                    }
                ];
                setDevices(mockDevices);
                setBrands(mockBrands);
                setModels([
                    {
                        id: "m1",
                        brandId: "b1",
                        name: "iPhone 13"
                    }
                ]);
                setIssues([
                    {
                        id: "i1",
                        deviceId: "d1",
                        name: "Screen",
                        durationMinutes: 30
                    }
                ]);
                setSelectedDeviceId("d1");
                setIssueDeviceId("d1");
                setSelectedBrandId("b1");
                setLoading(false);
                return;
            }
            const unsubDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "devices"), {
                "AdminInventoryPage.useEffect.unsubDevices": (snap)=>{
                    const data = snap.docs.map({
                        "AdminInventoryPage.useEffect.unsubDevices.data": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AdminInventoryPage.useEffect.unsubDevices.data"]);
                    setDevices(data);
                    if (data.length > 0 && !selectedDeviceId) setSelectedDeviceId(data[0].id);
                    if (data.length > 0 && !issueDeviceId) setIssueDeviceId(data[0].id);
                }
            }["AdminInventoryPage.useEffect.unsubDevices"]);
            const unsubBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "brands"), {
                "AdminInventoryPage.useEffect.unsubBrands": (snap)=>{
                    const data = snap.docs.map({
                        "AdminInventoryPage.useEffect.unsubBrands.data": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AdminInventoryPage.useEffect.unsubBrands.data"]);
                    setBrands(data);
                    if (data.length > 0 && !selectedBrandId) setSelectedBrandId(data[0].id);
                }
            }["AdminInventoryPage.useEffect.unsubBrands"]);
            const unsubModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "models"), {
                "AdminInventoryPage.useEffect.unsubModels": (snap)=>{
                    setModels(snap.docs.map({
                        "AdminInventoryPage.useEffect.unsubModels": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AdminInventoryPage.useEffect.unsubModels"]));
                }
            }["AdminInventoryPage.useEffect.unsubModels"]);
            const unsubIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "issues"), {
                "AdminInventoryPage.useEffect.unsubIssues": (snap)=>{
                    setIssues(snap.docs.map({
                        "AdminInventoryPage.useEffect.unsubIssues": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AdminInventoryPage.useEffect.unsubIssues"]));
                    setLoading(false);
                }
            }["AdminInventoryPage.useEffect.unsubIssues"]);
            return ({
                "AdminInventoryPage.useEffect": ()=>{
                    unsubDevices();
                    unsubBrands();
                    unsubModels();
                    unsubIssues();
                }
            })["AdminInventoryPage.useEffect"];
        }
    }["AdminInventoryPage.useEffect"], []);
    // Derived State
    const filteredBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminInventoryPage.useMemo[filteredBrands]": ()=>brands.filter({
                "AdminInventoryPage.useMemo[filteredBrands]": (b)=>b.deviceId === selectedDeviceId
            }["AdminInventoryPage.useMemo[filteredBrands]"])
    }["AdminInventoryPage.useMemo[filteredBrands]"], [
        brands,
        selectedDeviceId
    ]);
    const filteredModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminInventoryPage.useMemo[filteredModels]": ()=>models.filter({
                "AdminInventoryPage.useMemo[filteredModels]": (m)=>m.brandId === selectedBrandId
            }["AdminInventoryPage.useMemo[filteredModels]"])
    }["AdminInventoryPage.useMemo[filteredModels]"], [
        models,
        selectedBrandId
    ]);
    const filteredIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminInventoryPage.useMemo[filteredIssues]": ()=>issues.filter({
                "AdminInventoryPage.useMemo[filteredIssues]": (i)=>i.deviceId === issueDeviceId
            }["AdminInventoryPage.useMemo[filteredIssues]"])
    }["AdminInventoryPage.useMemo[filteredIssues]"], [
        issues,
        issueDeviceId
    ]);
    // Actions
    const seedData = async ()=>{
        if (!confirm("This will populate the database with default data. Continue?")) return;
        setLoading(true);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            await new Promise((r)=>setTimeout(r, 1000));
            alert("Data seeded successfully! (Mock Mode)");
            setLoading(false);
            return;
        }
        try {
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
            for (const d of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"]){
                // Add Device
                const deviceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "devices"));
                batch.set(deviceRef, {
                    name: d.name,
                    icon: d.icon || "Smartphone"
                });
                // Add Brands & Models
                for (const b of d.brands){
                    const brandRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "brands"));
                    batch.set(brandRef, {
                        deviceId: deviceRef.id,
                        name: b.name
                    });
                    for (const m of b.models){
                        const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "models"));
                        batch.set(modelRef, {
                            brandId: brandRef.id,
                            name: m
                        });
                    }
                }
                // Add Issues
                for (const i of d.issues){
                    const issueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "issues"));
                    batch.set(issueRef, {
                        deviceId: deviceRef.id,
                        name: i,
                        durationMinutes: 30
                    }); // Default 30 min
                }
            }
            await batch.commit();
            alert("Data seeded successfully!");
        } catch (error) {
            alert("Failed to seed data");
        } finally{
            setLoading(false);
        }
    };
    const addDevice = async ()=>{
        if (!newDeviceName.trim()) return;
        const iconToUse = newDeviceIcon || "Smartphone";
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setDevices([
                ...devices,
                {
                    id: `mock-${Date.now()}`,
                    name: newDeviceName,
                    icon: iconToUse
                }
            ]);
            setNewDeviceName("");
            setNewDeviceIcon("");
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "devices"), {
            name: newDeviceName,
            icon: iconToUse
        });
        setNewDeviceName("");
        setNewDeviceIcon("");
    };
    const deleteDevice = async (id)=>{
        if (!confirm("Delete this device and all its related data?")) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setDevices(devices.filter((d)=>d.id !== id));
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "devices", id));
    // Note: In a real app, you should also delete related brands/models/issues
    };
    const addBrand = async ()=>{
        if (!selectedDeviceId || !newBrandName.trim()) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setBrands([
                ...brands,
                {
                    id: `mock-b-${Date.now()}`,
                    deviceId: selectedDeviceId,
                    name: newBrandName
                }
            ]);
            setNewBrandName("");
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "brands"), {
            deviceId: selectedDeviceId,
            name: newBrandName
        });
        setNewBrandName("");
    };
    const deleteBrand = async (id)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setBrands(brands.filter((b)=>b.id !== id));
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "brands", id));
    };
    const addModel = async ()=>{
        if (!selectedBrandId || !newModelName.trim()) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setModels([
                ...models,
                {
                    id: `mock-m-${Date.now()}`,
                    brandId: selectedBrandId,
                    name: newModelName
                }
            ]);
            setNewModelName("");
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "models"), {
            brandId: selectedBrandId,
            name: newModelName
        });
        setNewModelName("");
    };
    const deleteModel = async (id)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setModels(models.filter((m)=>m.id !== id));
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "models", id));
    };
    const addIssue = async ()=>{
        if (!issueDeviceId || !newIssueName.trim()) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setIssues([
                ...issues,
                {
                    id: `mock-i-${Date.now()}`,
                    deviceId: issueDeviceId,
                    name: newIssueName,
                    durationMinutes: Number(newIssueDuration) || 30
                }
            ]);
            setNewIssueName("");
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "issues"), {
            deviceId: issueDeviceId,
            name: newIssueName,
            durationMinutes: Number(newIssueDuration) || 30
        });
        setNewIssueName("");
    };
    const updateIssueDuration = async (id, minutes)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setIssues(issues.map((i)=>i.id === id ? {
                    ...i,
                    durationMinutes: minutes
                } : i));
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "issues", id), {
            durationMinutes: minutes
        });
    };
    const deleteIssue = async (id)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMockMode"]) {
            setIssues(issues.filter((i)=>i.id !== id));
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "issues", id));
    };
    if (!authorized) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-2 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab("devices"),
                                className: `px-3 py-2 rounded-lg text-sm ${tab === "devices" ? "bg-cyan-500 text-black" : "bg-white/5 border border-white/10"}`,
                                children: t("Devices List")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab("models"),
                                className: `px-3 py-2 rounded-lg text-sm ${tab === "models" ? "bg-cyan-500 text-black" : "bg-white/5 border border-white/10"}`,
                                children: t("Models Management")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab("issues"),
                                className: `px-3 py-2 rounded-lg text-sm ${tab === "issues" ? "bg-cyan-500 text-black" : "bg-white/5 border border-white/10"}`,
                                children: t("Issues Management")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/inventory/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    devices.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: seedData,
                        className: "px-3 py-2 rounded-lg text-sm bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            " ",
                            t("Seed Default Data")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/inventory/page.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/inventory/page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            tab === "devices" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-1 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: t("Devices List")
                        }, void 0, false, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 mb-8 items-start bg-white/5 p-6 rounded-xl border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-white/50 mb-2 block",
                                            children: t("Device Icon")
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$image$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageUpload"], {
                                            value: newDeviceIcon,
                                            onChange: setNewDeviceIcon,
                                            path: "devices"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-white/50 mb-2 block",
                                            children: t("Device Name")
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newDeviceName,
                                                    onChange: (e)=>setNewDeviceName(e.target.value),
                                                    placeholder: t("Device Name"),
                                                    className: "flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: addDevice,
                                                    className: "px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        t("Add")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/30 mt-2",
                                            children: t("Upload an icon or a default placeholder will be used.")
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: devices.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-white/5 flex items-center justify-center overflow-hidden shrink-0 border border-white/10",
                                                    children: d.icon.startsWith("http") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: d.icon,
                                                        alt: d.name,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white/50",
                                                        children: d.icon.substring(0, 2).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-lg",
                                                            children: d.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/50",
                                                            children: [
                                                                brands.filter((b)=>b.deviceId === d.id).length,
                                                                " ",
                                                                t("Brand"),
                                                                " •",
                                                                issues.filter((i)=>i.deviceId === d.id).length,
                                                                " ",
                                                                t("Issue")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteDevice(d.id),
                                            className: "p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 205
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/inventory/page.tsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/inventory/page.tsx",
                lineNumber: 308,
                columnNumber: 9
            }, this),
            tab === "models" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: t("Brands Management")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/50 mb-1 block",
                                        children: t("Select Device")
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDeviceId,
                                        onChange: (e)=>setSelectedDeviceId(e.target.value),
                                        className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl",
                                        children: devices.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: d.id,
                                                className: "bg-black",
                                                children: d.name
                                            }, d.id, false, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 38
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: newBrandName,
                                        onChange: (e)=>setNewBrandName(e.target.value),
                                        placeholder: t("New Brand Name"),
                                        className: "flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addBrand,
                                        className: "px-4 py-3 bg-cyan-500 text-black rounded-xl font-semibold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 112
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-[400px] overflow-y-auto pr-2",
                                children: [
                                    filteredBrands.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center justify-between rounded-xl p-3 border cursor-pointer transition-all ${selectedBrandId === b.id ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`,
                                            onClick: ()=>setSelectedBrandId(b.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: b.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        deleteBrand(b.id);
                                                    },
                                                    className: "p-2 rounded-lg hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 186
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, b.id, true, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this)),
                                    filteredBrands.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-white/30 py-4",
                                        children: t("No brands found")
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/inventory/page.tsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: t("Models Management")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            selectedBrandId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/50 mb-2",
                                                children: [
                                                    t("Adding models for:"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400",
                                                        children: brands.find((b)=>b.id === selectedBrandId)?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 87
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newModelName,
                                                        onChange: (e)=>setNewModelName(e.target.value),
                                                        placeholder: t("New Model Name"),
                                                        className: "flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addModel,
                                                        className: "px-4 py-3 bg-cyan-500 text-black rounded-xl font-semibold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 118
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 max-h-[400px] overflow-y-auto pr-2",
                                        children: [
                                            filteredModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: m.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteModel(m.id),
                                                            className: "p-2 rounded-lg hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 163
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, m.id, true, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this)),
                                            filteredModels.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-white/30 py-4",
                                                children: t("No models found")
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 51
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex items-center justify-center text-white/30",
                                children: t("Select a brand to manage models")
                            }, void 0, false, {
                                fileName: "[project]/app/admin/inventory/page.tsx",
                                lineNumber: 408,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/inventory/page.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/inventory/page.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, this),
            tab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-1 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: t("Issues Management")
                        }, void 0, false, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-white/50 mb-1 block",
                                            children: t("Select Device")
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: issueDeviceId,
                                            onChange: (e)=>setIssueDeviceId(e.target.value),
                                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl",
                                            children: devices.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: d.id,
                                                    className: "bg-black",
                                                    children: d.name
                                                }, d.id, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 40
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-white/50 mb-1 block",
                                                    children: t("Issue Name")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newIssueName,
                                                    onChange: (e)=>setNewIssueName(e.target.value),
                                                    placeholder: t("e.g. Screen Replacement"),
                                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-white/50 mb-1 block",
                                                    children: t("Mins")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newIssueDuration,
                                                    onChange: (e)=>setNewIssueDuration(e.target.value),
                                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addIssue,
                                            className: "px-4 py-3 bg-cyan-500 text-black rounded-xl font-semibold mb-[1px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 123
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                filteredIssues.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: i.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 bg-black/20 px-3 py-1 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-white/50",
                                                                children: t("Duration:")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                defaultValue: i.durationMinutes,
                                                                onBlur: (e)=>updateIssueDuration(i.id, Number(e.target.value)),
                                                                className: "w-12 bg-transparent text-right text-sm focus:outline-none focus:text-cyan-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-white/50",
                                                                children: t("min")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteIssue(i.id),
                                                        className: "p-2 rounded-lg hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/inventory/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 161
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/inventory/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i.id, true, {
                                        fileName: "[project]/app/admin/inventory/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this)),
                                filteredIssues.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-white/30 py-4",
                                    children: t("No issues found for this device")
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/inventory/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 47
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/inventory/page.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/inventory/page.tsx",
                    lineNumber: 418,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/inventory/page.tsx",
                lineNumber: 417,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/inventory/page.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s(AdminInventoryPage, "PQKkDQQ25w8OG9PiULaMPBZ3Vl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = AdminInventoryPage;
var _c;
__turbopack_context__.k.register(_c, "AdminInventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2292bd14._.js.map