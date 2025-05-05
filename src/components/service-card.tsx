import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
}

const ServiceCard = ({ title, description, imgSrc, imgAlt, link }: ServiceCardProps) => {
  return (
    <div className="bg-neutral-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-cover"
          width="400"
          height="192"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-700 mb-2">{title}</h3>
        <p className="text-neutral-500 mb-4">{description}</p>
        <Link 
          href={link}
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
          Läs mer
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
