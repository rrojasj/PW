export var usedCars=  [
    {
        idAuto: "auto-1.1", idImg: 1.1, marca: "BMW", modelo: "X1 xDrive28i", annio: 2021, precio: 23933, millas: 65886, color: "Blanco", tipo: "SUV", traccion: "4x4", transmision: "Automático", imgSrc: "pw_e1_used_car_buy_bmw_1.webp",
    },
    {
        idAuto: "auto-1.2", idImg: 1.2, marca: "BMW", modelo: "530i", annio: 2019, precio: 23019, millas: 42096, color: "Negro", tipo: "Sedan", traccion: "2x2", transmision: "Automático", imgSrc: "pw_e1_used_car_buy_bmw_2.webp",
    },
    {
        idAuto: "auto-1.3", idImg: 1.3, marca: "Mercedes-Benz", modelo: "CLA 250", annio: 2023, precio: 35065, millas: 23844, color: "Blanco", tipo: "Coupe", traccion: "2x2", transmision: "Automático", imgSrc: "pw_e1_used_car_buy_mb_1.webp",
    },
    {
        idAuto: "auto-1.4", idImg: 1.4, marca: "Mercedes-Benz", modelo: "E-Class E300 4MATIC", annio: "2019", precio: 25972, millas: 57053, color: "Blanco", tipo: "Sedan", traccion: "2x2", transmision: "Manual", imgSrc: "pw_e1_used_car_buy_mb_2.webp",
    },
    {
        idAuto: "auto-1.5", idImg: 1.5, marca: "Volkswagen", modelo: "Taos 1.5T SE", annio: "2019", precio: 18995, millas: 66069, color: "Gris", tipo: "SUV", traccion: "4x2", transmision: "Manual", imgSrc: "pw_e1_used_car_buy_vw_1.webp",
    },
    {
        idAuto: "auto-1.6", idImg: 1.6, marca: "Volkswagen", modelo: "Passat 2.0T SE", annio: "2021", precio: 16886, millas: 68200, color: "Negro Titán", tipo: "Sedan", traccion: "2x2", transmision: "Automático", imgSrc: "pw_e1_used_car_buy_vw_2.webp",
    },
]
export var newCars= [
    {
        idAuto: "auto-2.1", idImg: 2.1, marca: "Lincoln", modelo: "Corsair Standard", annio: 2024, precio: 56450,millas: 0, color: "Rojo", tipo: "SUV", traccion: "4x4", transmision: "Automático", imgSrc: "pw_e1_new_car_buy_1_lincoln.webp",
    },
    {
        idAuto: "auto-2.2", idImg: 2.2, marca: "Audi", modelo: "Q5 2.0T Premium", annio: 2024, precio: 40383, millas: 0, color: "Gris", tipo: "SUV", traccion: "4x2", transmision: "Manual", imgSrc: "pw_e1_new_car_buy_2_audi.webp",
    },
    {
        idAuto: "auto-2.3", idImg: 2.3, marca: "Cadillac", modelo: "XT4 Premium Luxury", annio: 2024, precio: 76780, millas: 0, color: "Negro Jet", tipo: "SUV", traccion: "4x4", transmision: "Automático", imgSrc: "pw_e1_new_car_buy_3_cadillac.webp",
    },
    {
        idAuto: "auto-2.4", idImg: 2.4, marca: "Cadillac", modelo: "XT5 Premium Luxury", annio: 2024, precio: 83900, millas: 0, color: "Negro", tipo: "SUV", traccion: "4x4", transmision: "Manual", imgSrc: "pw_e1_new_car_buy_4_cadillac.webp",
    },
    {
        idAuto: "auto-2.5", idImg: 2.5, marca: "Volvo", modelo: "XC90 B6 Plus Bright", annio: 2024, precio: 55610, millas: 0, color: "Carbón", tipo: "SUV", traccion: "4x4", transmision: "Automático", imgSrc: "pw_e1_new_car_buy_5_volvo.webp",
    },
    {
        idAuto: "auto-2.6", idImg: 2.6, marca: "Mercedes-Benz", modelo: "GLE 350 4MATIC", annio: 2024, precio: 94375, millas: 0, color: "Blanco", tipo: "SUV", traccion: "4x4", transmision: "Automático", imgSrc: "pw_e1_new_car_buy_6_mb.webp",
    },
]
export var upcomingCars = [
    {
        idAuto: "auto-3.1", idImg: 3.1, marca: "Dodge", modelo: "Journey SE", annio: 2019, precio: 8865,millas: 88051, color: "Negro", tipo: "SUV", traccion: "4x2", transmision: "Automático", imgSrc: "pw_e1_upcoming_car_reserve_1_dodge.webp",
    },
    {
        idAuto: "auto-3.4", idImg: 3.4, marca: "Nissan", modelo: "Sentra SE", annio: 2021, precio: 11869, millas: 68642, color: "Gris", tipo: "Sedan", traccion: "2x2", transmision: "Automático", imgSrc: "pw_e1_upcoming_car_reserve_4_nissan.webp",
    },
    {
        idAuto: "auto-3.3", idImg: 3.3, marca: "Buick", modelo: "Encore Preferred", annio: 2018, precio: 9473, millas: 94439, color: "Negro", tipo: "SUV", traccion: "4x2", transmision: "Automático", imgSrc: "pw_e1_upcoming_car_reserve_3_buick.webp",
    },
]
export var allCars = usedCars.concat(newCars, upcomingCars);

// module.exports = { usedCars, newCars, upcomingCars, allCars };
