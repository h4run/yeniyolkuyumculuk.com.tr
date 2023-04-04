export default function Home() {
  return (
    <section className="relative pt-24 pb-36 bg-white overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none text-amber-400">Yeniyol Kuyumculuk</h2>
          <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">İletişim Bilgileri</p>
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/2 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width={32} height={33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z" stroke="#4F46E5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Telefon Numarası</h3>
                <p className="font-medium leading-relaxed">
                  <a href="tel:+905434591060">0543 459 1060</a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width={32} height={33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z" stroke="#4F46E5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z" stroke="#4F46E5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">Adres</h3>
                <p className="font-medium max-w-xs mx-auto leading-relaxed">Kale Mahallesi Mevsim Sokak No:6/2 Altındağ, Ankara</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
