import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-[#0f2038] text-white py-6 fixed bottom-0 left-0 w-full">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6">
        <p className="text-sm">&copy; 2025 Jasmine Xu. All rights reserved.</p>

        <div className="space-x-4 text-xl">
          <a href="https://github.com/xuja0812" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://www.linkedin.com/in/jasmine-jinxuan-xu/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
      </div>
    </footer>
  );
}
