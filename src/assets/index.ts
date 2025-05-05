// Bilder för projektet
import carRental from "./images/car-rental.jpg";
import movingBoxes from './images/moving-boxes.jpg';
import transportTruck from './images/transport-truck.jpg';
import compactCar from './images/compact-car.svg';
import kombiCar from './images/kombi-car.svg';
import van from './images/van.svg';
import vanJpg from './images/van.jpg';
import movingBoxesSvg from './images/moving-boxes.svg';
import transportTruckSvg from './images/transport-truck.svg';
import heroImage from './images/hero-image.svg';


// Exportera alla bilder
export {
  carRental,
  movingBoxes,
  transportTruck,
  compactCar,
  kombiCar,
  van,
  vanJpg,
  movingBoxesSvg,
  transportTruckSvg,
  heroImage
};

/**
 * Hjälpfunktion som returnerar rätt sökväg till bilder beroende på miljö
 * @param imagePath Bildens sökväg (t.ex. '/images/car-rental.jpg')
 * @returns Den korrekta sökvägen som fungerar både på Replit och lokalt
 */
export function getImagePath(imagePath: string): string {
  // I Vite-miljö kan vi inte använda process.env direkt i klienten
  // så vi använder ett enklare tillvägagångssätt
  
  // Hämta ut filnamnet från sökvägen
  const fileName = imagePath.split('/').pop() || '';
  
  // Matcha filnamnet med motsvarande import
  switch (fileName) {
    case 'car-rental.jpg':
      return carRental;
    case 'moving-boxes.jpg':
      return movingBoxes;
    case 'transport-truck.jpg':
      return transportTruck;
    case 'compact-car.svg':
      return compactCar;
    case 'kombi-car.svg':
      return kombiCar;
    case 'van.svg':
      return van;
    case 'van.jpg':
      return vanJpg;
    case 'moving-boxes.svg':
      return movingBoxesSvg;
    case 'transport-truck.svg':
      return transportTruckSvg;
    case 'hero-image.svg':
      return heroImage;
    default:
      console.warn(`Image not found: ${imagePath}`);
      return imagePath;
  }
}