import { Basics } from '@/types/resume';
import { Mail, Phone, MapPin, User } from 'lucide-react'; 

interface HeaderProps {
  basics: Basics;
}

export default function Header({ basics }: HeaderProps) {
  return (
    <header className="pb-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8">
        {/* 左侧信息 */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">{basics.name}</h1>
          <p className="text-gray-700 mb-4">{basics.label}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{basics.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{basics.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{basics.location}</span>
            </div>
          </div>
        </div>

        {/* 右侧头像 */}
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
          <img
            src={basics.image}
            alt="个人头像"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </header>
  );
}