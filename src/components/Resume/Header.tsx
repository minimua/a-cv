import { Basics } from '@/types/resume';
import { Mail, Phone, MapPin, User } from 'lucide-react'; 

interface HeaderProps {
  basics: Basics;
}

export default function Header({ basics }: HeaderProps) {
  return (
    <header className="pb-6">
      <div className="flex justify-between items-start gap-8">
        {/* 左侧信息 */}
        <div className="flex-1">
          {/* 名字和职位 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{basics.name}</h1>
            <p className="text-xl text-gray-600">{basics.label}</p>
          </div>

          {/* 联系信息 */}
          <div className="space-y-2">
            {basics.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <a 
                  href={`mailto:${basics.email}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {basics.email}
                </a>
              </div>
            )}

            {basics.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <a 
                  href={`tel:${basics.phone}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {basics.phone}
                </a>
              </div>
            )}

            {basics.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{basics.location}</span>
              </div>
            )}
          </div>

          {/* 个人简介 */}
          {basics.summary && (
            <div className="mt-4 text-gray-600 leading-relaxed">
              <p>{basics.summary}</p>
            </div>
          )}
        </div>

        {/* 右侧头像 */}
        <div className="w-32 h-32 shrink-0"> {/* 固定宽高且不压缩 */}
          {basics.image ? (
            <img
              src={basics.image}
              alt="个人头像"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}