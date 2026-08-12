const products = [

/* ======================================================
   FLOW METERS
====================================================== */
{
    id: 143,
    name: "Boilers, Burners, Thermic Fluid",
    category: "Boilers, Burners, Thermic Fluid",
    image: "images/products/boilers burners thermic fluid.jpeg",
    description: "Industrial boilers, burners and thermic fluid heating systems for process heating applications.",
    featured: true
},

{
    id: 1,
    name: "Battery Operated Turbine Flowmeter with Flow Rate Indicator & Totalizer",
    category: "Flow Meters",
    image: "images/products/battery operated turbine flowmeter with flow rate indicator & totalizer.png",
    description: "Battery-powered turbine flowmeter with integrated flow rate indication and totalizer for accurate liquid flow measurement.",
    featured: true
},

{
    id: 2,
    name: "Coriolis Mass Flowmeter",
    category: "Flow Meters",
    image: "images/products/coriolis mass flowmeter.png",
    description: "High-accuracy mass flowmeter for direct measurement of liquid and gas flow in industrial processes.",
    featured: true
},

{
    id: 3,
    name: "Electromagnetic Flow Meter with Field Mounted Flow Rate Indicator, Totalizer & 4-20 mA Output",
    category: "Flow Meters",
    image: "images/products/Electromagnetic flow meter with field mounted flow rate indicator, totalizer & 4-20 Ma Out Put.png",
    description: "Electromagnetic flowmeter with local display, totalizer and analog output for process automation.",
    featured: true
},

{
    id: 4,
    name: "Electromagnetic Flowmeter with Remote Indication & 10 Meters Cable",
    category: "Flow Meters",
    image: "images/products/electromagnetic flowmeter with remote indication & 10 meters cable.png",
    description: "Remote-mounted electromagnetic flowmeter designed for convenient monitoring in industrial installations.",
    featured: true
},

{
    id: 5,
    name: "Fuel Flowmeter",
    category: "Flow Meters",
    image: "images/products/fuel flowmeter.png",
    description: "Designed for reliable measurement of diesel, fuel oil and other petroleum-based liquids.",
    featured: false
},

{
    id: 6,
    name: "Hand Hold Ultrasonic Flowmeter",
    category: "Flow Meters",
    image: "images/products/hand hold ultrasonic flowmeter.png",
    description: "Portable clamp-on ultrasonic flowmeter for temporary flow measurement without pipeline modification.",
    featured: false
},

{
    id: 7,
    name: "Insertion Type Electromagnetic Flow Meter with Field Mounted Flow Rate Indicator, Totalizer & 4-20 mA Output",
    category: "Flow Meters",
    image: "images/products/insertion type electromagnetic flow meter with field mounted flow rate indicator, totalizer 4-20 mA out put.png",
    description: "Insertion-type electromagnetic flowmeter suitable for large pipelines and water distribution systems.",
    featured: false
},

{
    id: 8,
    name: "Insertion Type Thermal Mass Flow Meter",
    category: "Flow Meters",
    image: "images/products/insertion type thermal mass flow meter.png",
    description: "Measures gas flow directly using thermal mass sensing technology with minimal pressure loss.",
    featured: false
},

{
    id: 9,
    name: "Multi Jet Water Meter",
    category: "Flow Meters",
    image: "images/products/multi jet water meter.png",
    description: "Durable multi-jet water meter for accurate measurement in municipal and industrial applications.",
    featured: false
},

{
    id: 10,
    name: "Oval Gear Flow Meter OFGM Series",
    category: "Flow Meters",
    image: "images/products/oval gear flow meter OFGM series.png",
    description: "Positive displacement flowmeter designed for highly accurate measurement of viscous liquids.",
    featured: false
},

{
    id: 11,
    name: "Oval Gear Flowmeter SDOGM Series",
    category: "Flow Meters",
    image: "images/products/oval gear flowmeter SDOGM series.png",
    description: "Industrial oval gear flowmeter for precision volumetric flow measurement.",
    featured: false
},

{
    id: 12,
    name: "Single Jet Water Meter",
    category: "Flow Meters",
    image: "images/products/single jet water meter.png",
    description: "Compact single-jet water meter suitable for residential and commercial water monitoring.",
    featured: false
},

{
    id: 13,
    name: "Thermal Mass Flowmeter",
    category: "Flow Meters",
    image: "images/products/thermal mass flowmeter.png",
    description: "Direct mass flow measurement solution for air, gases and compressed air systems.",
    featured: false
},

{
    id: 14,
    name: "Turbine Flow Meter with Field Mounted Flow Rate Indicator, Totalizer & 4-20 mA Output",
    category: "Flow Meters",
    image: "images/products/turbine flow meter with field mounted flow rate indicator totalizer & 4-20 mA output.png",
    description: "High-performance turbine flowmeter with local indication and industrial analog output.",
    featured: true
},

{
    id: 15,
    name: "Turbine Flowmeter with GSM GPRS Technology",
    category: "Flow Meters",
    image: "images/products/Turbine flowmeter with GSM GPRS technology.png",
    description: "Smart turbine flowmeter supporting remote monitoring through GSM/GPRS communication.",
    featured: true
},

{
    id: 16,
    name: "Vortex Flowmeter 1",
    category: "Flow Meters",
    image: "images/products/vortex flowmeter 1.png",
    description: "Industrial vortex flowmeter for steam, liquid and gas flow measurement.",
    featured: false
},

{
    id: 17,
    name: "Vortex Flowmeter 2",
    category: "Flow Meters",
    image: "images/products/vortex flowmeter 2.png",
    description: "Reliable vortex shedding flowmeter for demanding industrial process applications.",
    featured: false
},

{
    id: 18,
    name: "Vortex Flowmeter for Temperature & Pressure Compensation",
    category: "Flow Meters",
    image: "images/products/Vortex flowmeter for temperature & pressure compensation.png",
    description: "Advanced vortex flowmeter with integrated temperature and pressure compensation.",
    featured: true
},

{
    id: 19,
    name: "Woltman Type Water Meter with Magnetic Drive",
    category: "Flow Meters",
    image: "images/products/woltman type water meter with magnetic drive.png",
    description: "Heavy-duty Woltman water meter designed for bulk water flow measurement.",
    featured: false
},

/* ======================================================
   ROTAMETERS
====================================================== */

{
    id: 20,
    name: "Acrylic Body Rotameters with & Without Isolation Valves",
    category: "Rotameters",
    image: "images/products/acrylic body rotameters with & without isolation valves.png",
    description: "Transparent acrylic rotameter for precise low-flow measurement with optional isolation valves.",
    featured: false
},

{
    id: 21,
    name: "By-pass Glass Tube Rotameter",
    category: "Rotameters",
    image: "images/products/by-pass glass tube rotameter.png",
    description: "Glass tube bypass rotameter designed for high-capacity flow monitoring.",
    featured: false
},

{
    id: 22,
    name: "By-pass Metal Tube Rotameter",
    category: "Rotameters",
    image: "images/products/by-pass metal tube rotameter.png",
    description: "Metal tube bypass rotameter for high-pressure industrial applications.",
    featured: false
},

{
    id: 23,
    name: "Glass Tube Rotameter",
    category: "Rotameters",
    image: "images/products/glass tube rotameter.png",
    description: "Reliable variable area flowmeter for visual flow indication of liquids and gases.",
    featured: true
},

{
    id: 24,
    name: "Glass Tube Rotameter with Two Flow Alarm Switches",
    category: "Rotameters",
    image: "images/products/glass tube rotameter with two flow alarm switch adjustable throughout flow range.png",
    description: "Glass tube rotameter equipped with dual adjustable flow alarm switches.",
    featured: false
},

{
    id: 25,
    name: "Horizontal Metal Tube Rotameter",
    category: "Rotameters",
    image: "images/products/horizontal metal tube rotameter.png",
    description: "Horizontal metal tube flowmeter suitable for demanding industrial environments.",
    featured: false
},

{
    id: 26,
    name: "Metal Tube Rotameter",
    category: "Rotameters",
    image: "images/products/metal tube rotameter.png",
    description: "Robust metal tube variable area flowmeter for high-temperature and high-pressure service.",
    featured: true
},

{
    id: 27,
    name: "Metal Tube Rotameter with 4-20 mA Transmitter & Totalizer",
    category: "Rotameters",
    image: "images/products/metal tube rotameter with 4-20 mAmp transmitter & totalizer.png",
    description: "Industrial rotameter with transmitter and totalizer for remote process monitoring.",
    featured: false
},

{
    id: 28,
    name: "Metal Tube Rotameter with Flow Alarm Switch",
    category: "Rotameters",
    image: "images/products/metal tube rotameter with flow alarm switch adjustable throughout flow range.png",
    description: "Metal tube rotameter featuring adjustable flow alarm switch for process protection.",
    featured: false
},

{
    id: 29,
    name: "Purge Rotameter",
    category: "Rotameters",
    image: "images/products/purge rotameter.png",
    description: "Compact purge rotameter designed for low-flow gas and liquid applications.",
    featured: false
},

{
    id: 30,
    name: "Purge Rotameter with DP Regulator & Isolation Valve",
    category: "Rotameters",
    image: "images/products/purge rotameter with DP regulator and isolation valve.png",
    description: "Integrated purge rotameter with differential pressure regulator and isolation valve.",
    featured: false
},

{
    id: 31,
    name: "Purge Rotameter with Rear Connection & Flow Alarm Switch",
    category: "Rotameters",
    image: "images/products/purge rotameter with rear connection and with one flow alarm switch adjustable throughout flow range.png",
    description: "Rear-connected purge rotameter with adjustable flow alarm for process control.",
    featured: false
},

/* ======================================================
   TEMPERATURE INSTRUMENTS
====================================================== */

{
    id: 32,
    name: "Bimetallic Temperature Gauge",
    category: "Temperature Instruments",
    image: "images/products/bimetallic temperature gauge.png",
    description: "Mechanical temperature gauge providing reliable local temperature indication.",
    featured: true
},

{
    id: 33,
    name: "Temperature Sensors (RTD & Thermocouple) & Thermowells",
    category: "Temperature Instruments",
    image: "images/products/temperature sensors (RTD &Thermocouple) & Thermowells.png",
    description: "Industrial RTDs, thermocouples and thermowells for accurate temperature sensing.",
    featured: true
},

{
    id: 34,
    name: "Temperature Transmitter",
    category: "Temperature Instruments",
    image: "images/products/temperature transmitter.png",
    description: "Converts temperature sensor signals into industry-standard output for automation systems.",
    featured: false
},
/* ======================================================
   FLOW MEASUREMENT ACCESSORIES
====================================================== */

{
    id: 35,
    name: "Averaging Pitot Tube",
    category: "Flow Measurement Accessories",
    image: "images/products/averaging pitot tube.png",
    description: "Primary flow element used for accurate differential pressure flow measurement in ducts and pipelines.",
    featured: false
},

{
    id: 36,
    name: "Averaging Pitot Tube with Automatic Purging System",
    category: "Flow Measurement Accessories",
    image: "images/products/averaging pitot tube with automatic purging system.png",
    description: "Pitot tube with automatic purging for reliable flow measurement in dusty or dirty process conditions.",
    featured: false
},

{
    id: 37,
    name: "Averaging Pitot Tube with DP Transmitter",
    category: "Flow Measurement Accessories",
    image: "images/products/averaging pitot tube with DP transmitter.png",
    description: "Integrated pitot tube and differential pressure transmitter for accurate flow monitoring.",
    featured: true
},

{
    id: 38,
    name: "Averaging Pitot Tube with Purging System",
    category: "Flow Measurement Accessories",
    image: "images/products/averaging pitot tube with purging system.png",
    description: "Flow measurement assembly with manual purging system for improved reliability.",
    featured: false
},

{
    id: 39,
    name: "Integral Orifice Flange Assembly (SORF)",
    category: "Flow Measurement Accessories",
    image: "images/products/integral orifice flange assembly (SORF).png",
    description: "Slip-on raised face orifice flange assembly for precise differential pressure flow measurement.",
    featured: false
},

{
    id: 40,
    name: "Integral Orifice Flange Assembly (WNRF)",
    category: "Flow Measurement Accessories",
    image: "images/products/integral orifice flange assembly (WNRF).png",
    description: "Weld neck raised face orifice flange assembly for demanding industrial flow applications.",
    featured: false
},

{
    id: 41,
    name: "Orifice Flange Assembly with DP Transmitter",
    category: "Flow Measurement Accessories",
    image: "images/products/orifice flange assembly with DP transmitter.png",
    description: "Complete orifice flange assembly supplied with differential pressure transmitter.",
    featured: true
},

{
    id: 42,
    name: "Orifice Plate",
    category: "Flow Measurement Accessories",
    image: "images/products/orifice plate.png",
    description: "Precision-machined primary flow element for differential pressure flow measurement.",
    featured: false
},

{
    id: 43,
    name: "Orifice Plate with SORF Flange Assembly",
    category: "Flow Measurement Accessories",
    image: "images/products/orifice plate with SORF flange assembly.png",
    description: "Complete SORF flange and orifice plate assembly for industrial process flow measurement.",
    featured: false
},

{
    id: 44,
    name: "Orifice Plate with WNRF Flange Assembly",
    category: "Flow Measurement Accessories",
    image: "images/products/orifice plate with WNRF flange assembly.png",
    description: "WNRF flange mounted orifice plate for accurate differential pressure measurement.",
    featured: false
},

/* ======================================================
   LEVEL INSTRUMENTS
====================================================== */

{
    id:45,
    name:"Bilge Level Switch",
    category:"Level Instruments",
    image:"images/products/bilge level switch.png",
    description:"Reliable float-operated switch designed for bilge and sump level monitoring.",
    featured:false
},

{
    id:46,
    name:"Cable Float Level Switch",
    category:"Level Instruments",
    image:"images/products/cable float level switch.png",
    description:"Simple and dependable liquid level switch for tanks, reservoirs and sumps.",
    featured:false
},

{
    id:47,
    name:"Capacitance Level Indicator Transmitter and High Low Switch",
    category:"Level Instruments",
    image:"images/products/capacitance level indicator transmitter and High Low switch 1.png",
    description:"Capacitance-based level transmitter with integrated high and low level switching.",
    featured:true
},

{
    id:48,
    name:"Capacitance Level Indicator Transmitter and High Low Switch",
    category:"Level Instruments",
    image:"images/products/capacitance level indicator transmitter and High Low switch 2.png",
    description:"Industrial capacitance level monitoring solution with indication and switching functions.",
    featured:false
},

{
    id:49,
    name:"Capacitance Level Switch",
    category:"Level Instruments",
    image:"images/products/capacitance level switch.png",
    description:"Electronic level switch for liquids, powders and granular materials.",
    featured:false
},

{
    id:50,
    name:"Conductivity Level Switch",
    category:"Level Instruments",
    image:"images/products/conductivity level switch.png",
    description:"Conductivity-based level switch for conductive liquid level detection.",
    featured:false
},

{
    id:51,
    name:"Displacer Level Switch with One Level Control Point",
    category:"Level Instruments",
    image:"images/products/Displacer level switch with one level control point.png",
    description:"Displacer-operated level switch providing reliable single-point level control.",
    featured:false
},

{
    id:52,
    name:"Displacer Level Switch with Two Level Control Points",
    category:"Level Instruments",
    image:"images/products/Displacer level switch with two level control point.png",
    description:"Dual-point displacer level switch for independent high and low level monitoring.",
    featured:false
},

{
    id:53,
    name:"Float & Board Type Level Indicator",
    category:"Level Instruments",
    image:"images/products/float & board type level indicator.png",
    description:"Mechanical level indication system for large storage tanks and process vessels.",
    featured:false
},

{
    id:54,
    name:"Float & Board Type Level Indicator with High & Low Level Switch",
    category:"Level Instruments",
    image:"images/products/float & board type level indicator with high & low level switch.png",
    description:"Float-operated level indicator with integrated high and low level alarms.",
    featured:true
},

{
    id:55,
    name:"Hydrostatic Level Indicator",
    category:"Level Instruments",
    image:"images/products/hydrostatic level indicator.png",
    description:"Hydrostatic level measurement instrument for continuous tank level indication.",
    featured:false
},

{
    id:56,
    name:"Hydrostatic Level Indicator Transmitter",
    category:"Level Instruments",
    image:"images/products/hydrostatic level indicator transmitter.png",
    description:"Continuous hydrostatic level transmitter for industrial liquid level monitoring.",
    featured:true
},

{
    id:57,
    name:"Hydrostatic Level Transmitter with Remote Indication",
    category:"Level Instruments",
    image:"images/products/hydrostatic level transmitter with rmote indication.png",
    description:"Remote display hydrostatic transmitter for accurate liquid level measurement.",
    featured:false
},

{
    id:58,
    name:"Magnetoresistive Level Indicator Transmitter and Hi-Low Switch",
    category:"Level Instruments",
    image:"images/products/magnetoresistive level indicator transmitter and Hi-Low switch.png",
    description:"High-precision magnetoresistive level transmitter with integrated alarm switches.",
    featured:true
},

{
    id:59,
    name:"Mini Level Switches",
    category:"Level Instruments",
    image:"images/products/mini level switches.png",
    description:"Compact level switches suitable for small tanks and OEM equipment.",
    featured:false
},

{
    id:60,
    name:"Radar Level Indicator Transmitter",
    category:"Level Instruments",
    image:"images/products/radar level indicator transmitter 1.png",
    description:"Non-contact radar level transmitter for precise continuous level measurement.",
    featured:true
},

{
    id:61,
    name:"Radar Level Indicator Transmitter",
    category:"Level Instruments",
    image:"images/products/radar level indicator transmitter 2.png",
    description:"Industrial radar level transmitter suitable for harsh process environments.",
    featured:false
},
{
    id:62,
    name:"Reflex Level Indicator",
    category:"Level Instruments",
    image:"images/products/reflex level indicator.png",
    description:"Heavy-duty reflex level gauge providing clear visual indication of liquid levels in pressurized vessels.",
    featured:false
},

{
    id:63,
    name:"Rotary Paddle Level Switch",
    category:"Level Instruments",
    image:"images/products/rotary paddle level switch.png",
    description:"Rotary paddle switch designed for reliable detection of powders, grains and bulk solids.",
    featured:false
},

{
    id:64,
    name:"Side Mounted Hydrostatic Level Indicator Transmitter",
    category:"Level Instruments",
    image:"images/products/side mounted hydrostatic level indicator transmitter.png",
    description:"Side-mounted hydrostatic transmitter providing continuous liquid level monitoring.",
    featured:false
},

{
    id:65,
    name:"Side Mounted Magnetic Level Indicator with 4-20 mA Output Transmitter",
    category:"Level Instruments",
    image:"images/products/side mounted magnetic level indicator with 4-20 mA out put transmitter.png",
    description:"Magnetic level indicator with analog transmitter for continuous remote level monitoring.",
    featured:true
},

{
    id:66,
    name:"Side Mounted Magnetic Level Indicator with High & Low Level Switch",
    category:"Level Instruments",
    image:"images/products/side mounted magnetic level indicator with high & low level switch.png",
    description:"Magnetic level indicator with integrated high and low alarm switches.",
    featured:false
},

{
    id:67,
    name:"Side Mounted Magnetic Level Indicator",
    category:"Level Instruments",
    image:"images/products/side mounted magnetic level indicator.png",
    description:"Magnetic level indicator providing reliable visual indication for industrial tanks and vessels.",
    featured:true
},

{
    id:68,
    name:"Side Mounted Magnetic Level Switch with Square Flange Connection",
    category:"Level Instruments",
    image:"images/products/Side mounted magnetic level switch with square flange connection.png",
    description:"Square flange mounted magnetic level switch for dependable point level detection.",
    featured:false
},

{
    id:69,
    name:"Side Mounted Magnetic Level Switch",
    category:"Level Instruments",
    image:"images/products/Side mounted magnetic level switch.png",
    description:"Industrial magnetic level switch for high and low level protection.",
    featured:false
},

{
    id:70,
    name:"Top Mounted Magnetic Level Indicator with High & Low Level Switch",
    category:"Level Instruments",
    image:"images/products/top mounted magentic level indicator with high & low level switch.png",
    description:"Top-mounted magnetic indicator with integrated alarm switches for process safety.",
    featured:false
},

{
    id:71,
    name:"Top Mounted Magnetic Level Indicator",
    category:"Level Instruments",
    image:"images/products/top mounted magnetic level indicator.png",
    description:"Top-entry magnetic level indicator for vertical storage tanks and vessels.",
    featured:true
},

{
    id:72,
    name:"Top Mounted Magnetic Level Switch",
    category:"Level Instruments",
    image:"images/products/top mounted magnetic level switch.png",
    description:"Top-mounted magnetic switch providing reliable point level detection.",
    featured:false
},

{
    id:73,
    name:"Transparent Level Indicator",
    category:"Level Instruments",
    image:"images/products/transparent level indicator.png",
    description:"Transparent liquid level indicator for direct visual monitoring of process fluids.",
    featured:false
},

{
    id:74,
    name:"Tubular Level Indicator",
    category:"Level Instruments",
    image:"images/products/tubular level indicator.png",
    description:"Tubular level gauge offering continuous visual indication of liquid level.",
    featured:false
},

{
    id:75,
    name:"Tuning Fork Level Switch",
    category:"Level Instruments",
    image:"images/products/tuning fork level switch.png",
    description:"Vibration-based tuning fork switch for accurate point level detection in liquids.",
    featured:true
},

{
    id:76,
    name:"Ultrasonic Level Indicator & Transmitter",
    category:"Level Instruments",
    image:"images/products/ultrasonic level indicator & transmitter 1.png",
    description:"Non-contact ultrasonic level transmitter with local indication for continuous measurement.",
    featured:true
},

{
    id:77,
    name:"Ultrasonic Level Indicator & Transmitter",
    category:"Level Instruments",
    image:"images/products/ultrasonic level indicator & transmitter 2.png",
    description:"Industrial ultrasonic transmitter suitable for tanks, reservoirs and process vessels.",
    featured:false
},

{
    id:78,
    name:"Ultrasonic Level Transmitter with Remote Indication",
    category:"Level Instruments",
    image:"images/products/ultrasonic level transmitter with remote indication.png",
    description:"Remote indication ultrasonic level transmitter for accurate non-contact level monitoring.",
    featured:false
},

/* ======================================================
   PRESSURE INSTRUMENTS
====================================================== */

{
    id:79,
    name:"Diaphragm Sealed Pressure Gauge",
    category:"Pressure Instruments",
    image:"images/products/diaphragm sealed pressure gauge.png",
    description:"Pressure gauge with diaphragm seal for corrosive, viscous and sanitary process media.",
    featured:true
},

{
    id:80,
    name:"Differential Pressure Transmitter",
    category:"Pressure Instruments",
    image:"images/products/differential pressure transmitter 1.png",
    description:"Industrial differential pressure transmitter for flow, level and pressure measurement.",
    featured:true
},

{
    id:81,
    name:"Differential Pressure Transmitter",
    category:"Pressure Instruments",
    image:"images/products/differential pressure transmitter 2.png",
    description:"High-performance differential pressure transmitter for demanding industrial applications.",
    featured:false
},

{
    id:82,
    name:"General Purpose Pressure Gauge",
    category:"Pressure Instruments",
    image:"images/products/general purpose pressure gauge.png",
    description:"Reliable pressure gauge designed for general industrial pressure measurement.",
    featured:true
},

{
    id:83,
    name:"Manometers & Macleode Gauge",
    category:"Pressure Instruments",
    image:"images/products/manometers & macleode gauge.png",
    description:"Precision instruments for measuring low pressure and vacuum applications.",
    featured:false
},

{
    id:84,
    name:"Mini Pressure Indicator Transmitter",
    category:"Pressure Instruments",
    image:"images/products/mini pressure indicator transmitter.png",
    description:"Compact pressure transmitter with local indication for OEM and industrial equipment.",
    featured:false
},

{
    id:85,
    name:"Mini Pressure Transmitter",
    category:"Pressure Instruments",
    image:"images/products/mini pressure transmitter.png",
    description:"Small form-factor pressure transmitter for space-constrained industrial installations.",
    featured:false
},

{
    id:86,
    name:"Pressure Indicator Transmitter",
    category:"Pressure Instruments",
    image:"images/products/pressure indicator transmitter 1.png",
    description:"Pressure transmitter with integrated digital indication for process monitoring.",
    featured:true
},

{
    id:87,
    name:"Pressure Indicator Transmitter",
    category:"Pressure Instruments",
    image:"images/products/pressure indicator transmitter 2.png",
    description:"Industrial pressure transmitter with local display and reliable signal transmission.",
    featured:false
},

{
    id:88,
    name:"Pressure Transmitter",
    category:"Pressure Instruments",
    image:"images/products/pressure transmitter.png",
    description:"High-accuracy pressure transmitter suitable for industrial automation and process control.",
    featured:true
},
/* ======================================================
   HEATERS & HEATING ELEMENTS
====================================================== */

{
    id:89,
    name:"Ceramic Band Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/Ceramic Band Heaters.png",
    description:"High-efficiency ceramic band heaters designed for plastic processing, extrusion and industrial heating applications.",
    featured:true
},

{
    id:90,
    name:"Control Panel Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/control panel heaters.png",
    description:"Compact heaters for maintaining enclosure temperature and preventing condensation inside electrical panels.",
    featured:false
},

{
    id:91,
    name:"Duct Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/duct heaters.png",
    description:"Electric duct heaters for HVAC systems and industrial air heating applications.",
    featured:true
},

{
    id:92,
    name:"Finned U-Type Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/Finned u-type heaters.png",
    description:"Finned tubular heaters providing efficient heat transfer for air and gas heating applications.",
    featured:false
},

{
    id:93,
    name:"Heating Elements",
    category:"Heaters & Heating Elements",
    image:"images/products/heating elements.png",
    description:"Industrial electric heating elements suitable for a wide range of process heating applications.",
    featured:false
},

{
    id:94,
    name:"High Temperature Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/high temperature heaters.png",
    description:"Heavy-duty heaters engineered for high-temperature industrial process applications.",
    featured:true
},

{
    id:95,
    name:"M-Type Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/M-type heaters.png",
    description:"M-type electric heaters designed for uniform heat distribution and long service life.",
    featured:false
},

{
    id:96,
    name:"Mica Band Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/mica band heaters.png",
    description:"Economical mica insulated band heaters for plastic machinery and industrial equipment.",
    featured:false
},

{
    id:97,
    name:"Titanium Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/titanium heaters.png",
    description:"Corrosion-resistant titanium immersion heaters suitable for aggressive chemical solutions.",
    featured:true
},

{
    id:98,
    name:"Tubular Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/Tubular heaters.png",
    description:"Versatile tubular heating elements for industrial process heating and equipment manufacturing.",
    featured:false
},

{
    id:99,
    name:"U-Type Heaters",
    category:"Heaters & Heating Elements",
    image:"images/products/U-type heaters.png",
    description:"Industrial U-type immersion heaters providing efficient liquid heating performance.",
    featured:false
},

/* ======================================================
   LABORATORY EQUIPMENT
====================================================== */

{
    id:100,
    name:"Digital Oil Bath",
    category:"Laboratory Equipment",
    image:"images/products/digital oil bath.png",
    description:"Precision digital oil bath providing uniform temperature control for laboratory applications.",
    featured:false
},

{
    id:101,
    name:"Hot Air Oven",
    category:"Laboratory Equipment",
    image:"images/products/hot air oven.png",
    description:"Laboratory hot air oven designed for drying, sterilizing and material testing.",
    featured:true
},

{
    id:102,
    name:"Lab Oven",
    category:"Laboratory Equipment",
    image:"images/products/Lab Oven.png",
    description:"General-purpose laboratory oven suitable for heating, drying and curing applications.",
    featured:false
},

{
    id:103,
    name:"Magnetic Stirrer",
    category:"Laboratory Equipment",
    image:"images/products/magnetic stirrer.png",
    description:"Compact magnetic stirrer for efficient mixing of laboratory samples and chemical solutions.",
    featured:true
},

{
    id:104,
    name:"Mechanical Stirrer",
    category:"Laboratory Equipment",
    image:"images/products/mechanical stirrer.png",
    description:"Heavy-duty laboratory stirrer designed for high-viscosity liquid mixing applications.",
    featured:false
},

{
    id:105,
    name:"Muffle Furnace",
    category:"Laboratory Equipment",
    image:"images/products/muffle furnace.png",
    description:"High-temperature laboratory furnace for material testing, ash analysis and heat treatment.",
    featured:true
},

{
    id:106,
    name:"High Temperature Furnace",
    category:"Laboratory Equipment",
    image:"images/products/hitemperature furnace.png",
    description:"Industrial high-temperature furnace designed for thermal processing and laboratory research.",
    featured:true
},

/* ======================================================
   STRAINERS & FILTERS
====================================================== */

{
    id:107,
    name:"Y Type Strainer",
    category:"Strainers & Filters",
    image:"images/products/'Y' type strainer.png",
    description:"Pipeline strainer designed to remove solid contaminants and protect downstream equipment.",
    featured:true
},

{
    id:108,
    name:"Basket Type Strainer",
    category:"Strainers & Filters",
    image:"images/products/basket type strainer.png",
    description:"High-capacity basket strainer suitable for industrial liquid filtration systems.",
    featured:false
},

{
    id:109,
    name:"Duplex Filter Strainer",
    category:"Strainers & Filters",
    image:"images/products/duplex filter strainer.png",
    description:"Continuous operation duplex strainer allowing maintenance without interrupting process flow.",
    featured:true
},

/* ======================================================
   FLAME ARRESTORS & BREATHER VALVES
====================================================== */

{
    id:110,
    name:"Breather Valve",
    category:"Flame Arrestors & Breather Valves",
    image:"images/products/breather valve 1.png",
    description:"Protective breather valve designed to regulate tank pressure while minimizing product loss.",
    featured:false
},

{
    id:111,
    name:"Breather Valve",
    category:"Flame Arrestors & Breather Valves",
    image:"images/products/breather valve 2.png",
    description:"Industrial breather valve ensuring safe tank venting and pressure balancing.",
    featured:false
},

{
    id:112,
    name:"End Of Line Flame Arrestor",
    category:"Flame Arrestors & Breather Valves",
    image:"images/products/end of line flame arrestor 1.png",
    description:"Safety device preventing flame propagation in venting and gas handling systems.",
    featured:true
},

{
    id:113,
    name:"End Of Line Flame Arrestor",
    category:"Flame Arrestors & Breather Valves",
    image:"images/products/end of line flame arrestor 2.png",
    description:"Heavy-duty end-of-line flame arrestor designed for hazardous industrial environments.",
    featured:false
},

{
    id:114,
    name:"Inline Flame Arrestor",
    category:"Flame Arrestors & Breather Valves",
    image:"images/products/inline flame arrestor.png",
    description:"Inline flame arrestor providing reliable protection against flame transmission through pipelines.",
    featured:true
},
/* ======================================================
   SIGHT GLASSES
====================================================== */

{
    id:115,
    name:"Double Window Sight Glass",
    category:"Sight Glasses",
    image:"images/products/double window sight glass.png",
    description:"Provides clear visual inspection of liquid flow in industrial pipelines and process equipment.",
    featured:false
},

{
    id:116,
    name:"Double Window Sight Glass with Flapper",
    category:"Sight Glasses",
    image:"images/products/double window sight glass with flapper.png",
    description:"Double window sight glass with integrated flapper for enhanced flow indication.",
    featured:false
},

{
    id:117,
    name:"Double Window Sight Glass with Rotary Wheel",
    category:"Sight Glasses",
    image:"images/products/double window sight glass with rotory wheel.png",
    description:"Rotary wheel sight glass designed to provide clear visual confirmation of fluid flow.",
    featured:false
},

{
    id:118,
    name:"Full View Sight Glass",
    category:"Sight Glasses",
    image:"images/products/full view sight glass.png",
    description:"Full-view sight glass allowing unobstructed observation of process fluids.",
    featured:true
},

{
    id:119,
    name:"Full View Sight Glass with Indicating Ball",
    category:"Sight Glasses",
    image:"images/products/full view sight glass with indicating ball.png",
    description:"Full-view sight glass equipped with an indicating ball for visual flow confirmation.",
    featured:false
},

{
    id:120,
    name:"Full View Sight Glass with Tri-Clover Connection",
    category:"Sight Glasses",
    image:"images/products/full view sight glass with tri-clover connection.png",
    description:"Sanitary sight glass with tri-clover connection for food, pharmaceutical and hygienic applications.",
    featured:true
},

/* ======================================================
   MANIFOLDS
====================================================== */

{
    id:121,
    name:"3 Way 'T' Type Manifold",
    category:"Manifolds",
    image:"images/products/3 way 'T' Type Manifold.png",
    description:"Three-way manifold designed for pressure transmitter isolation, venting and calibration.",
    featured:false
},

{
    id:122,
    name:"5 Way 'T' Type Manifold",
    category:"Manifolds",
    image:"images/products/5 way 'T' Type Manifold.png",
    description:"Five-way manifold providing isolation, equalization and venting for differential pressure transmitters.",
    featured:true
},

/* ======================================================
   FLOW SWITCHES
====================================================== */

{
    id:123,
    name:"Flow Switch with Flame Proof Enclosure",
    category:"Flow Switches",
    image:"images/products/flow switch with flame proof enclosure.png",
    description:"Explosion-proof flow switch designed for hazardous industrial environments requiring reliable flow monitoring.",
    featured:true
},

{
    id:124,
    name:"Flow Switch with Weather Proof Enclosure",
    category:"Flow Switches",
    image:"images/products/flow switch with weather proof enclosure.png",
    description:"Weather-resistant flow switch for dependable flow monitoring in outdoor and industrial installations.",
    featured:false
},

/* ======================================================
   SIGNAL / MONITORING SYSTEMS
====================================================== */

{
    id:125,
    name:"Data Communication of Electromagnetic Flowmeter to Centralized Computers via GSM GPRS Modem",
    category:"Signal / Monitoring Systems",
    image:"images/products/data communication of electromagnetic flowmeter to centralized computers via GSM GPRS modem.png",
    description:"Remote monitoring solution enabling electromagnetic flowmeters to transmit real-time process data via GSM/GPRS.",
    featured:true
},

{
    id:126,
    name:"Field & Panel Mounted Flow Rate Indicator Totalizer Batcher & 4-20 mA Re-transmission Output",
    category:"Signal / Monitoring Systems",
    image:"images/products/field & panle mounted flow rate indicator totalizer batcher & 4-20 mA re-transmission output.png",
    description:"Industrial flow indicator with totalizer, batching functions and analog retransmission for process automation.",
    featured:true
},

{
    id:127,
    name:"Panel Mounted Flow Rate Indicator Totalizer Batcher & 4-20 mA Re-transmission Output",
    category:"Signal / Monitoring Systems",
    image:"images/products/panel mounted flow rate indicator totalizer batcher & 4-20 mA re-transmission output.png",
    description:"Panel-mounted flow monitoring instrument with batching, totalizing and 4-20 mA retransmission capabilities.",
    featured:true
},

/* ======================================================
   SPECIAL ACCESSORIES
====================================================== */

{
    id:128,
    name:"Condensate Pot",
    category:"Flow Measurement Accessories",
    image:"images/products/condensate pot.png",
    description:"Condensate pot designed to protect differential pressure transmitters in steam and high-temperature process applications.",
    featured:false
},
/* ======================================================
   ADD THESE TO YOUR EXISTING products ARRAY
   (continues from id 128)
====================================================== */

/* ======================================================
   LED LIGHTINGS
====================================================== */

{
    id: 129,
    name: "LED Well Glass Fitting",
    category: "LED Lightings",
    image: "images/products/led well glass fitting.jpeg",
    description: "Robust LED well glass fitting designed for reliable industrial and hazardous area lighting.",
    featured: true
},

{
    id: 130,
    name: "LED Flood Light Fitting",
    category: "LED Lightings",
    image: "images/products/led flood light fitting.jpeg",
    description: "High-intensity LED flood light for wide-area illumination in industrial yards and plants.",
    featured: true
},

{
    id: 131,
    name: "LED Bulkhead Fitting",
    category: "LED Lightings",
    image: "images/products/led bulkhead fitting.jpeg",
    description: "Compact LED bulkhead fitting suitable for corridors, stairwells and industrial walkways.",
    featured: false
},

{
    id: 132,
    name: "LED Tube Light Fitting",
    category: "LED Lightings",
    image: "images/products/led tube light fitting.jpeg",
    description: "Energy-efficient LED tube light fitting for general industrial and commercial lighting.",
    featured: false
},

{
    id: 133,
    name: "Well Glass Fitting",
    category: "LED Lightings",
    image: "images/products/well glass fitting.jpeg",
    description: "Conventional well glass fitting built for durability in demanding industrial environments.",
    featured: false
},

{
    id: 134,
    name: "Flood Light Fitting",
    category: "LED Lightings",
    image: "images/products/flood light fitting.jpeg",
    description: "Heavy-duty flood light fitting for large-area outdoor and industrial illumination.",
    featured: false
},


{
    id: 137,
    name: "Junction Box",
    category: "LED Lightings",
    image: "images/products/junction box.jpeg",
    description: "Industrial junction box for safe cable termination and electrical connections.",
    featured: false
},

{
    id: 138,
    name: "Cable Glands",
    category: "LED Lightings",
    image: "images/products/cable glands.jpeg",
    description: "Reliable cable glands ensuring secure and sealed cable entry into enclosures.",
    featured: false
},

{
    id: 139,
    name: "Reactor Vessel LED Lamp",
    category: "LED Lightings",
    image: "images/products/reactor vessel led lamp.jpeg",
    description: "Specialized LED lamp designed for illumination inside reactor vessels.",
    featured: true
},

{
    id: 140,
    name: "Control Gear Box for Flood Light",
    category: "LED Lightings",
    image: "images/products/control gear box for flood light.jpeg",
    description: "Control gear box designed to support and regulate industrial flood light fittings.",
    featured: false
},

{
    id: 141,
    name: "Hooter with Beacon Lamp",
    category: "LED Lightings",
    image: "images/products/hooter with beacon lamp.jpeg",
    description: "Combined audible hooter and visual beacon lamp for industrial safety alerting.",
    featured: true
},

{
    id: 142,
    name: "Plug-in Switch Socket Transformer (24V DC with Hand Lamp)",
    category: "LED Lightings",
    image: "images/products/plug-in switch socket transformer 24v dc with hand lamp.jpeg",
    description: "24V DC plug-in switch socket transformer supplied with a portable hand lamp for safe maintenance work.",
    featured: false
},

{
    id: 144,
    name: "Fuel Handling Systems",
    category: "Fuel Handling Systems",
    image: "images/products/fuel handling systems.jpeg",
    description: "Complete fuel handling and conveying systems for industrial plants and boiler houses.",
    featured: true
},

{
    id: 145,
    name: "Gear Box",
    category: "Gear Box",
    image: "images/products/gear box.png",
    description: "Industrial gear boxes designed for reliable power transmission in rotating equipment.",
    featured: false
},

{
    id: 146,
    name: "RAV",
    category: "RAV",
    image: "images/products/rav.png",
    description: "Rotary air valves used for controlled material feeding in pneumatic conveying systems.",
    featured: false
},

{
    id: 147,
    name: "FRP Blowers and Scrubbers",
    category: "FRP Blowers and Scrubbers",
    image: "images/products/frp blowers and scrubbers.png",
    description: "Corrosion-resistant FRP blowers and scrubbers for fume extraction and air pollution control.",
    featured: true
},

{
    id: 148,
    name: "Variable Frequency Drives",
    category: "Variable Frequency Drives",
    image: "images/products/variable frequency drives.png",
    description: "VFDs for precise motor speed control and energy-efficient industrial automation.",
    featured: true
},

{
    id: 149,
    name: "Control & MCC Panels",
    category: "Control & MCC Panels",
    image: "images/products/control & mcc panels.png",
    description: "Custom-built control and motor control center panels for industrial power distribution.",
    featured: true
},

{
    id: 150,
    name: "Control Valve / Solenoid Valve",
    category: "Control Valve / Solenoid Valve",
    image: "images/products/control valve solenoid valve.png",
    description: "Automated control valves and solenoid valves for precise process fluid regulation.",
    featured: false
},

{
    id: 151,
    name: "PID Controllers",
    category: "PID Controllers",
    image: "images/products/pid controllers.png",
    description: "PID controllers for accurate closed-loop process temperature and parameter control.",
    featured: false
},

/* ======================================================
   PNEUMATIC & INDUSTRIAL AUTOMATION PRODUCTS
====================================================== */

{
    id: 152,
    name: "Solenoid Valves",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/solenoid valves.jpeg",
    description: "Electrically actuated solenoid valves for automated control of air and fluid flow.",
    featured: true
},

{
    id: 153,
    name: "Angle Seat Valves",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/angle seat valves.jpeg",
    description: "Pneumatically actuated angle seat valves for reliable on/off process control.",
    featured: false
},

{
    id: 154,
    name: "Rotary Couplings",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/rotary couplings.jpeg",
    description: "Rotary unions and couplings for transferring media between stationary and rotating equipment.",
    featured: false
},

{
    id: 155,
    name: "Pneumatic Directional Control Valves",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/pneumatic directional control valves.jpeg",
    description: "Directional control valves used to regulate air flow direction in pneumatic circuits.",
    featured: false
},

{
    id: 156,
    name: "Pneumatic Actuators",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/pneumatic actuators.jpeg",
    description: "Pneumatic actuators for automated operation of valves and industrial equipment.",
    featured: true
},

{
    id: 157,
    name: "Pneumatic Cylinders",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/pneumatic cylinders.jpeg",
    description: "Durable pneumatic cylinders for linear motion in industrial automation applications.",
    featured: true
},

{
    id: 158,
    name: "One-Touch Pneumatic Fittings",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/one-touch pneumatic fittings.jpeg",
    description: "Quick-connect one-touch fittings for fast and leak-free pneumatic tubing connections.",
    featured: false
},

{
    id: 159,
    name: "Ball Valves",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/ball valves.jpeg",
    description: "Industrial ball valves offering reliable shut-off for a wide range of process media.",
    featured: false
},

{
    id: 160,
    name: "Butterfly Valves",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/butterfly valves.jpeg",
    description: "Lightweight butterfly valves for efficient flow control in large diameter pipelines.",
    featured: false
},

{
    id: 161,
    name: "Air Preparation Units (FRL – Filter, Regulator & Lubricator)",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/air preparation units frl filter regulator lubricator.jpeg",
    description: "FRL units combining filtration, pressure regulation and lubrication for clean compressed air supply.",
    featured: true
},

{
    id: 162,
    name: "Air Regulators",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/air regulators.jpeg",
    description: "Precision air pressure regulators for consistent pneumatic system performance.",
    featured: false
},

{
    id: 163,
    name: "Pneumatic Coiled Hoses",
    category: "Pneumatic & Industrial Automation Products",
    image: "images/products/pneumatic coiled hoses.jpeg",
    description: "Flexible coiled hoses designed for compressed air delivery in workshop and industrial settings.",
    featured: false
},

/* ======================================================
   RUBBER & POLYMER PRODUCTS
====================================================== */

{
    id: 164,
    name: "Oil Seals",
    category: "Rubber & Polymer Products",
    image: "images/products/oil seals.jpeg",
    description: "Precision oil seals preventing lubricant leakage and contamination in rotating machinery.",
    featured: false
},

{
    id: 165,
    name: "Hydraulic Seals",
    category: "Rubber & Polymer Products",
    image: "images/products/hydraulic seals.jpeg",
    description: "High-pressure hydraulic seals designed for cylinders and hydraulic system components.",
    featured: false
},

{
    id: 166,
    name: "Rubber O-Rings",
    category: "Rubber & Polymer Products",
    image: "images/products/rubber o-rings.jpeg",
    description: "Standard and custom rubber O-rings for sealing applications across industries.",
    featured: true
},

{
    id: 167,
    name: "Rubber Sheets",
    category: "Rubber & Polymer Products",
    image: "images/products/rubber sheets.jpeg",
    description: "Industrial rubber sheets used for gasketing, lining and general sealing purposes.",
    featured: false
},

{
    id: 168,
    name: "Couplings",
    category: "Rubber & Polymer Products",
    image: "images/products/couplings.jpeg",
    description: "Flexible rubber couplings for vibration damping and misalignment compensation in drives.",
    featured: false
},

{
    id: 169,
    name: "Expansion Bellows",
    category: "Rubber & Polymer Products",
    image: "images/products/expansion bellows.jpeg",
    description: "Rubber and metal expansion bellows accommodating thermal movement in piping systems.",
    featured: true
},

{
    id: 170,
    name: "Silicone Products",
    category: "Rubber & Polymer Products",
    image: "images/products/silicone products.jpeg",
    description: "Heat-resistant silicone components for sealing and insulation applications.",
    featured: false
},

{
    id: 171,
    name: "Teflon (PTFE) Products",
    category: "Rubber & Polymer Products",
    image: "images/products/teflon ptfe products.jpeg",
    description: "Chemically resistant PTFE components for sealing, lining and insulation applications.",
    featured: false
},

{
    id: 172,
    name: "Polymer Products",
    category: "Rubber & Polymer Products",
    image: "images/products/polymer products.jpeg",
    description: "Engineered polymer components for wear-resistant and lightweight industrial applications.",
    featured: false
},

{
    id: 173,
    name: "Industrial Hoses (All Types)",
    category: "Rubber & Polymer Products",
    image: "images/products/industrial hoses all types.jpeg",
    description: "Wide range of industrial hoses for air, water, chemical and hydraulic media transfer.",
    featured: true
},

{
    id: 174,
    name: "Rubber Products",
    category: "Rubber & Polymer Products",
    image: "images/products/rubber products.jpeg",
    description: "General purpose rubber components manufactured to industrial specifications.",
    featured: false
}
];