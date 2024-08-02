import React from "react";

function About({ posts }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome To Maxion Coffee
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Welcome to Maxion, Tọa lạc giữa lòng thành phố, Quán Cà Phê Xinh Đẹp
            là nơi lý tưởng để bạn tận hưởng những giây phút thư giãn và thưởng
            thức những ly cà phê đậm đà hương vị. Với không gian ấm cúng, thiết
            kế tinh tế và phong cách, chúng tôi mang đến cho bạn trải nghiệm cà
            phê độc đáo và đáng nhớ. Mỗi tách cà phê tại đây đều được pha chế
            bởi những barista chuyên nghiệp, sử dụng những hạt cà phê chất lượng
            cao từ các vùng trồng nổi tiếng trên thế giới. Ngoài ra, chúng tôi
            còn có đa dạng các loại đồ uống khác như trà, sinh tố và bánh ngọt
            để bạn lựa chọn. Hãy đến và cảm nhận sự khác biệt tại Quán Cà Phê
            Xinh Đẹp - nơi mọi khoảnh khắc đều trở nên đặc biệt!
          </p>
          <a
            href="/bt4"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="/bt4/productList"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img
            src="https://statics.vincom.com.vn/xu-huong/0-0-0-0-9-quan-ca-phe/THE-VIBES-1.jpg"
            alt="mockup"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto">
        {/* header */}

        {/* header ends here */}
        <main className="mt-12">
          {/* featured section */}
          <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* main post */}
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <img
                src="https://media.istockphoto.com/id/1325198378/vi/anh/m%E1%BB%99t-kh%C3%B4ng-gian-y%C3%AAn-t%C4%A9nh-v%E1%BB%9Bi-c%C3%A2y-l%C3%A1.jpg?s=1024x1024&w=is&k=20&c=MMJuopaYwjLojE8-zKkFFOz5c_qV_6L4mEur8PqATEU="
                className="rounded-md object-cover w-full h-64"
              />
              <span className="text-green-700 text-sm hidden md:block mt-4">
                {" "}
                Technology{" "}
              </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                Lấy cảm hứng từ các vùng đất trên thế giới, MAXION tạo ra không
                gian mở và thân thiện nhằm kết nối và ghi lại những khoảnh khắc
                tươi vui trong lúc thưởng thức.
              </h1>
              <p className="text-gray-600 mb-4">
                Tại Cà Phê Maxion, chúng tôi tự hào là điểm đến lý tưởng cho
                những ai đam mê cà phê và tìm kiếm một không gian thư giãn và
                sang trọng. Với một bước chân vào quán, bạn sẽ được trải nghiệm
                những hương vị cà phê tinh tế từ những hạt rang Maxion chất
                lượng cao, cùng không gian ấm áp và đầy nghệ thuật.
              </p>
              <a
                href="/bt4"
                className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
              >
                Hãy đến và khám phá thế giới cà phê đậm đà tại Cà Phê Maxion,
                nơi mà mỗi tách cà phê đều là một câu chuyện đặc biệt. Read more
              </a>
            </div>
            {/* sub-main posts */}
            <div className="w-full md:w-4/7">
              {/* post 1 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1zv1H3IDwtz_s0vR0bVc43eS20u6lhUstH7Hro0eggYNllag-4prYoZGI681eAe1P-o&usqp=CAU" classname="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />

                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block">
                    {" "}
                    Gadgets{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Chào mừng bạn đến với Cà Phê Maxion! Chúng tôi tự hào mang
                    đến cho bạn những tách cà phê tuyệt vời từ những hạt Maxion
                    chất lượng cao và sản phẩm mới nhất của chúng tôi - "Maxion
                    Gold Blend". Hãy đến và khám phá!
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Chào mừng đến với Cà Phê Maxion! Chúng tôi là địa chỉ tin
                    cậy dành cho những ai yêu thích cà phê tinh tế và đậm đà.
                    Tại đây, bạn có thể thưởng thức những tách cà phê hảo hạng
                    từ những hạt Maxion chất lượng cao nhất. Đặc biệt, chúng tôi
                    rất tự hào giới thiệu đến bạn sản phẩm mới nhất - "Maxion
                    Gold Blend", một sự kết hợp hoàn hảo giữa hương vị đậm đà và
                    hương thơm tinh tế. Hãy đến và trải nghiệm cùng chúng tôi!
                  </p>
                </div>
              </div>
              {/* post 2 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://statics.vincom.com.vn/xu-huong/0-0-0-0-9-quan-ca-phe/THE-VIBES-1.jpg"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block">
                    {" "}
                    Bitcoin{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể
                    tìm lại những dấu ấn thăng trầm của một Sài Gòn xưa cũ. Trên
                    những góc phố,...
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe
                    hoa, muôn cung đường ngợp mùa hoa… đó là rẻo cao Tây Bắc
                    luôn làm say lòng...
                  </p>
                </div>
              </div>
              {/* post 3 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/review/Qu%C3%A1n%20%C4%83n%20ngon/10-quan-cafe-dep-o-sai-gon.jpg"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block">
                    {" "}
                    Insights{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Menu của quán có đủ các loại nước uống như cà phê, trà trái
                    cây ủ lạnh, trà sữa,… cho đến những món ăn nhẹ đi kèm như
                    bánh nướng, bánh ngọt và một vài món ăn vặt. Không chỉ quán
                    được bày trí bắt mắt mà đồ ăn cũng được chú trong hình thức,
                    tạo cảm giác ngon miệng cho khách hàng.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Mới đây, các "tín đồ" cà phê đang bàn tán xôn xao về
                    SIGNATURE - Biểu tượng văn hóa cà phê của Maxion Coffee đã
                    quay trở lại.Một lời...
                  </p>
                </div>
              </div>
              {/* post 4 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff-s2rXKpERyKuzY-9FsQob0Fd6MwvkccNjI9OKLn6B5Mz8I26S7LKCd4668gMa74XJk&usqp=CAU"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-white rounded px-4">
                  <span className="text-green-700 text-sm hidden md:block">
                    {" "}
                    Cryptocurrency{" "}
                  </span>
                  <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Vừa qua, Fanpage Nhà đã hé mở những thông tin đầu tiên về
                    "SIGNATURE by Maxion Coffee" kèm lời hẹn "Hôm nay bạn có hẹn
                    chưa? Mình cà phê nhé!".
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Sân khấu trình diễn" hành trình của hạt cà phê từ lo rang,
                    qua những ống đồng, tới máy pha và tách cà phê tại bàn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end featured section */}
          {/* recent posts */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://romanocoffee.com.vn/uploads/news/bai-viet/van-hoa-ca-phe-sai-gon/ca-phe-via-he.jpg"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ...
                </h2>
                <p className="text-gray-700 mt-2">
                  Mới đây, các "tín đồ" cà phê đang bàn tán xôn xao về SIGNATURE
                  - Biểu tượng văn hóa cà phê của Maxion Coffee đã quay trở
                  lại.Một lời...
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://www.huongnghiepaau.com/wp-content/uploads/2019/01/van-hoa-ca-phe-viet.jpg"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  CHỈ CHỌN CÀ PHÊ MỖI SÁNG NHƯNG CŨNG KHIẾN CUỘC SỐNG CỦA BẠN
                  THÊM THÚ VỊ, TẠI SAO KHÔNG?
                </h2>
                <p className="text-gray-700 mt-2">
                  Thực chất, bạn không nhất thiết phải làm gì to tát để tạo nên
                  một ngày rực rỡ. Chỉ cần bắt đầu từ những việc nhỏ nhặt nhất,
                  khi bạn...
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://saigonchutla.vn/wp-content/uploads/2022/08/net-van-hoa-dac-trung-cua-sai-gon-con-nguoi.png"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG
                </h2>
                <p className="text-gray-700 mt-2">
                  Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm
                  lại những dấu ấn thăng trầm của một Sài Gòn xưa cũ. Trên những
                  góc phố,...
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* end recent posts */}
          {/* subscribe */}
          <div className="rounded flex md:shadow mt-12">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div className="px-4 py-2">
              <h3 className="text-3xl text-gray-800 font-bold">
                Theo dõi để xem thông tin mới nhất
              </h3>
              <p className="text-xl text-gray-700">
                "Dễ dàng cập nhật những thông tin mới nhất từ quán cà phê Maxion
                bằng cách theo dõi chúng tôi tại đây!"
              </p>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="john@tech.com"
                />
                <button className="px-4 py-2 rounded bg-green-800 text-gray-100">
                  Subscribe
                  <i className="bx bx-right-arrow-alt" />
                </button>
                <p className="text-green-900 opacity-50 text-sm mt-1">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>
          {/* ens subscribe section */}
          {/* popular posts */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Popular news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1513207993300-fcae548cb65f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Put all speaking her delicate recurred possible..
                </h2>
                <p className="text-gray-700 mt-2">
                  New York Café nằm trong khuôn viên của khách sạn Boscolo.
                  Trước đây, tòa nhà này từng được gọi là cung điện New York. Nó
                  được thiết kế bởi kiến trúc sư Alajos Hauszmann cùng Flóris
                  Korb và Kálmán Giergl. Công trình chính thức mở cửa vào ngày
                  23/10/1894.
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://channel.mediacdn.vn/428462621602512896/2023/11/17/photo-1-1700210703195864356663.jpg"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  LY CÀ PHÊ SỮA ĐÁ VIỆT NAM XUẤT HIỆN Ở QUẢNG TRƯỜNG THỜI ĐẠI
                  NEW YORK...
                </h2>
                <p className="text-gray-700 mt-2">
                  Ấn tượng và tự hào, hình ảnh Việt Nam tiếp tục được lên sóng
                  tại Quảng trường Thời Đại (New York) với ly cà phê sữa đá quen
                  thuộc, đi...
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full  lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1449198063792-7d754d6f3c80?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Nằm trên một con phố chính của Budapest (Hungary), New York
                  Café từng được bình chọn là quán cà phê có không gian đẹp nhất
                  thế giới theo CNN và Tripadvisor.
                </h2>
                <p className="text-gray-700 mt-2">
                  Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ
                  nhưỡng phì nhiêu, nguồn nước mát lành, bao bọc bởi mây và
                  sương cùng nền nhiệt độ mát mẻ quanh năm, những búp trà ở Tây
                  Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí,
                  và tinh hoa đất trời.Chính khí hậu đặc trưng cùng phương pháp
                  canh tác của đồng bào dân tộc nơi đây đã tạo ra Trà Xanh vị
                  mộc dễ uống, dễ yêu, không thể trộn lẫn với bất kỳ vùng miền
                  nào khác.
                </p>
                <a
                  href="/bt4"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* end popular posts */}
        </main>
        {/* main ends here */}
        {/* footer */}
        <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <p className="text-gray-600 hidden lg:block p-0 lg:pr-12">
                "Xin chào và cảm ơn bạn đã ghé thăm quán cà phê của chúng tôi!
                Chúng tôi hy vọng bạn sẽ có một trải nghiệm đáng nhớ với không
                gian thân thiện và những ly cà phê thơm ngon. Hãy thư giãn và
                tận hưởng từng khoảnh khắc tại đây cùng chúng tôi."
              </p>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Terms &amp; Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/bt4" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default About;