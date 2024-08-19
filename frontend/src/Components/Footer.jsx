const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Abstract</h3>
          <ul>
            <li className="hover:underline cursor-pointer">Branches</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Resources</h3>
          <ul>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Release Notes</li>
            <li className="hover:underline cursor-pointer">Status</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Community</h3>
          <ul>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Dribbble</li>
            <li className="hover:underline cursor-pointer">Podcast</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Company</h3>
          <ul>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Legal</li>
          </ul>
          <h3 className="font-semibold mb-2 my-3 text-xl">Contact Us</h3>
          <ul>
            <li className="hover:underline cursor-pointer">
              info@abstract.com
            </li>
          </ul>
        </div>
        <div className="mt-28 text-lg">
          <div>© Copyright 2022</div>
          <div>Abstract Studio Design, Inc.</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer