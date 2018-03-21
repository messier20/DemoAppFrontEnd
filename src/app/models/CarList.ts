export class CarList {
  cars;

  constructor() {
    this.cars = [{make: 'ACURA', model: ['ILX', 'MDX', 'RDX', 'RLX', 'TLX',]}, {make: 'ALFA ROMEO', model: ['4C', 'MITO',]}, {
      make: 'AUDI',
      model: ['A1', 'A3', 'A3 QUATTRO', 'A4', 'A4 ALLROAD', 'A4 QUATTRO', 'A5', 'A5 QUATTRO', 'A6', 'A6 QUATTRO', 'A7 QUATTRO', 'A8', 'A8 QUATTRO', 'ALLROAD', 'Q3', 'Q3 QUATTRO', 'Q5', 'Q7', 'R8', 'RS5', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ5', 'TT QUATTRO',]
    }, {make: 'BENTLEY', model: ['CONTINENTAL', 'MULSANNE',]}, {
      make: 'BMW',
      model: ['118I', '220I', '228I', '228I XDRIVE', '320I', '320I XDRIVE', '328D', '328D XDRIVE', '328I', '328I GT XDRIVE', '328I XDRIVE', '335I', '335I GT XDRIVE', '335I XDRIVE', '428I', '428I GRAN COUPE', '428I XDRIVE', '428I XDRIVE GRAN COUPE', '435I', '435I GRAN COUPE', '435I XDRIVE', '435I XDRIVE GRAN COUPE', '520I', '528I', '528I XDRIVE', '535D', '535D XDRIVE', '535I', '535I GT', '535I GT XDRIVE', '535I XDRIVE', '550I', '550I GT', '550I GT XDRIVE', '550I XDRIVE', '640I', '640I GRAN COUPE', '640I XDRIVE', '640I XDRIVE GRAN COUPE', '650I', '650I GRAN COUPE', '650I XDRIVE', '650I XDRIVE GRAN COUPE', '740I', '740LD XDRIVE', '740LD XDRVIE', '740LI', '740LI XDRIVE', '750I', '750I XDRIVE', '750LI', '750LI XDRIVE', '760LI', 'ACTIVEHYBRID 3', 'ACTIVEHYBRID 5', 'ACTIVEHYBRID 7', 'ALPINA B6 XDRIVE GRAN COUPE', 'ALPINA B7', 'ALPINA B7 XDRIVE', 'ALPINA B7L', 'ALPINA B7L XDRIVE', 'I3', 'I8', 'M135I', 'M235I', 'M235I XDRIVE', 'M3', 'M4', 'M5', 'M6', 'M6 GRAN COUPE', 'X1', 'X3', 'X4', 'X5', 'X6', 'Z4',]
    }, {make: 'BUICK', model: ['ENCLAVE', 'ENCORE', 'LACROSSE', 'REGAL', 'VERANO', 'WILDCAT',]}, {
      make: 'CADILLAC',
      model: ['ATS', 'CTS', 'ELR', 'ESCALADE', 'ESCALADE ESV', 'SRX', 'XTS',]
    }, {
      make: 'CHEVROLET',
      model: ['AVEO', 'CAMARO', 'CAPRICE', 'CAPTIVA SPORT', 'CITY EXPRESS', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS 2500', 'EXPRESS 3500', 'EXPRESS 4500', 'EXPRESS CARGO', 'EXPRESS PASAJEROS', 'IMPALA', 'IMPALA LIMITED', 'MALIBU', 'SILVERADO 1500', 'SILVERADO 2500', 'SILVERADO 2500 HD', 'SILVERADO 3500', 'SILVERADO 3500 HD', 'SONIC', 'SPARK', 'SPARK EV', 'SS', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT',]
    }, {make: 'CHRYSLER', model: ['200', '300', 'TOWN & COUNTRY',]}, {
      make: 'DODGE',
      model: ['CHALLENGER', 'CHARGER', 'DART', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER',]
    }, {make: 'FIAT', model: ['500', '500L',]}, {
      make: 'FORD',
      model: ['C-MAX', 'E-350 SUPER DUTY', 'E-450 SUPER DUTY', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F-150', 'F-250', 'F-250 SUPER DUTY', 'F-350', 'F-350 SUPER DUTY', 'F-450', 'F-450 SUPER DUTY', 'F-550', 'F-550 SUPER DUTY', 'FIESTA', 'FIESTA IKON', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'POLICE INTERCEPTOR SEDAN', 'POLICE INTERCEPTOR UTILITY', 'SPECIAL SERVICE POLICE SEDAN', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT', 'TRANSIT-150', 'TRANSIT-250', 'TRANSIT-350', 'TRANSIT-350 HD',]
    }, {
      make: 'GMC',
      model: ['ACADIA', 'CANYON', 'SAVANA 2500', 'SAVANA 3500', 'SAVANA 4500', 'SIERRA', 'SIERRA 1500', 'SIERRA 2500 HD', 'SIERRA 3500 HD', 'TERRAIN', 'YUKON', 'YUKON XL',]
    }, {
      make: 'HONDA',
      model: ['ACCORD', 'CIVIC', 'CR-V', 'CR-Z', 'CRF110F', 'CRF50F', 'CROSSTOUR', 'FIT', 'NC700J NM4', 'ODYSSEY', 'PCX150', 'PILOT', 'SXS500M2 PIONEER 500',]
    }, {
      make: 'HYUNDAI',
      model: ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA COUPE', 'ELANTRA GT', 'EQUUS', 'GENESIS', 'GENESIS COUPE', 'SANTA FE', 'SANTA FE XL', 'SONATA', 'TUCSON', 'VELOSTER', 'XG350',]
    }, {make: 'INFINITI', model: ['Q40', 'Q50', 'Q60', 'Q70', 'Q70L', 'QX50', 'QX60', 'QX70', 'QX80',]}, {
      make: 'JAGUAR',
      model: ['F-TYPE', 'XF', 'XFR', 'XFR-S', 'XJ', 'XJR', 'XK', 'XKR', 'XKR-S',]
    }, {make: 'JEEP', model: ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'RENEGADE', 'WRANGLER',]}, {
      make: 'KIA',
      model: ['CADENZA', 'FORTE', 'FORTE KOUP', 'K900', 'OPTIMA', 'RIO', 'RONDO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE',]
    }, {
      make: 'LAND ROVER',
      model: ['DEFENDER', 'DISCOVERY', 'LR2', 'LR4', 'RANGE ROVER', 'RANGE ROVER EVOQUE', 'RANGE ROVER SPORT',]
    }, {
      make: 'LEXUS',
      model: ['CT200H', 'ES300H', 'ES350', 'GS350', 'GS450H', 'GX460', 'IS250', 'IS350', 'LS460', 'LS600H', 'LX570', 'NX200T', 'NX300H', 'RC F', 'RC350', 'RX350', 'RX450H',]
    }, {make: 'LINCOLN', model: ['MKC', 'MKS', 'MKT', 'MKX', 'MKZ', 'NAVIGATOR',]}, {
      make: 'MASERATI',
      model: ['GRANTURISMO',]
    }, {make: 'MAZDA', model: ['2', '3', '5', '6', 'CX-5', 'CX-9', 'MX-5', 'MX-5 MIATA',]}, {
      make: 'MERCEDES-BENZ',
      model: ['A180', 'A200', 'A45 AMG', 'B ELECTRIC DRIVE', 'B180', 'B250', 'C250', 'C300', 'C350', 'C400', 'C63 AMG', 'CLA200', 'CLA250', 'CLA45 AMG', 'CLS400', 'CLS550', 'CLS63 AMG', 'CLS63 AMG S', 'E250', 'E300', 'E350', 'E400', 'E500', 'E550', 'E63 AMG', 'E63 AMG S', 'G550', 'G63 AMG', 'G65 AMG', 'GL350', 'GL450', 'GL500', 'GL550', 'GL63 AMG', 'GLA200', 'GLA250', 'GLA45 AMG', 'GLK250', 'GLK350', 'ML250', 'ML350', 'ML400', 'ML500', 'ML550', 'ML63 AMG', 'S550', 'S600', 'S63 AMG', 'S65 AMG', 'SL400', 'SL500', 'SL550', 'SL63 AMG', 'SL65 AMG', 'SLK200', 'SLK250', 'SLK350', 'SLK55 AMG', 'SLS AMG', 'SPRINTER 2500', 'SPRINTER 3500',]
    }, {make: 'MINI', model: ['COOPER', 'COOPER COUNTRYMAN', 'COOPER PACEMAN',]}, {
      make: 'MITSUBISHI',
      model: ['L200', 'LANCER', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT', 'RVR',]
    }, {
      make: 'NISSAN',
      model: ['370Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MICRA', 'MURANO', 'NV1500', 'NV200', 'NV2500', 'NV3500', 'PATHFINDER', 'QUEST', 'ROGUE', 'ROGUE SELECT', 'SENTRA', 'TITAN', 'VERSA', 'VERSA NOTE', 'XTERRA',]
    }, {make: 'PEUGEOT', model: ['2008', '208', '3008', '508', 'PARTNER', 'RCZ',]}, {
      make: 'PORSCHE',
      model: ['911', '918 SPYDER', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'MACAN', 'PANAMERA',]
    }, {make: 'RENAULT', model: ['CLIO', 'KOLEOS',]}, {make: 'ROLLS ROYCE', model: ['GHOST', 'PHANTOM', 'WRAITH',]}, {
      make: 'SCION',
      model: ['FR-S', 'IQ', 'TC', 'XB',]
    }, {make: 'SEAT', model: ['IBIZA', 'LEON', 'TOLEDO',]}, {make: 'SMART', model: ['FORTWO',]}, {
      make: 'SUBARU',
      model: ['BRZ', 'FORESTER', 'IMPREZA', 'LEGACY', 'OUTBACK', 'WRX', 'WRX STI', 'XV CROSSTREK',]
    }, {make: 'TESLA', model: ['S', 'X',]}, {
      make: 'TOYOTA',
      model: ['4RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'PRIUS C', 'PRIUS V', 'RAV4', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS',]
    }, {
      make: 'VOLKSWAGEN',
      model: ['AMAROK', 'BEETLE', 'CADDY', 'CC', 'CRAFTER', 'E-GOLF', 'EOS', 'GOLF', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN', 'TOUAREG',]
    }, {make: 'VOLVO', model: ['S60', 'S80', 'V60', 'V60 CROSS COUNTRY', 'XC60', 'XC70',]}];
  }
}
