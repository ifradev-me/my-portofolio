import { ChatIcon, GmailIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from './component/Icon';

const KontakSection = () => {
    return (
        <section className="min-h-screen py-10 px-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-950 mt-4 tracking-tight">
                    Ngobrol Yuk!
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-text-800 mb-4">
                    Jangan ragu untuk menghubungi saya. Saya siap membantu dan menjawab pertanyaan Anda.
                </p>
                <div className='flex gap-2'>
                    <a href="#"><InstagramIcon className="w-6 h-6" /></a>
                    <a href="#"><LinkedInIcon className="w-6 h-6" /></a>
                    <a href="#"><GitHubIcon className="w-6 h-6" /></a>
                    <a href="#"><GmailIcon className="w-6 h-6" /></a>
                    <a href="#"><ChatIcon className="w-6 h-6" /></a>
                </div>
                <form action="#" method="post" className='mt-8 flex flex-col gap-4 border-2 border-white rounded-3xl p-4 pb-5 -bg-conic-0 from-primary-blue via-primary-purple-900 to-primary-blue text-text-200 placeholder:text-text-400 focus:border-0 focus:shadow-lg group focus-within:scale-105 focus-within:shadow-lg transition-all duration-300'>
                    <label htmlFor="Name">Nama:</label>
                    <input type="text" required placeholder='anonim' className='appearance-none outline-none bg-background-800/60 rounded-lg p-1.5 focus:ring-0 caret-white'/>
                    <label htmlFor="Email">Email:</label>
                    <input type="email" required placeholder='person@example.com' className='appearance-none outline-none border-none focus:ring-0 caret-white bg-background-800/60 rounded-lg p-1.5 '/>
                    <label htmlFor='nomor whatsapp'>Nomor Whatsapp(opsional):</label>
                    <input type="number" placeholder='628123456789' className='appearance-none outline-none border-none focus:ring-0 caret-white bg-background-800/60 rounded-lg p-1.5 '/>
                    <label htmlFor="Message" >Pesan:</label>
                    <textarea typeof="text" required placeholder='Pesan' className='appearance-none p-2 outline-none border-none focus:ring-0 text-black caret-primary-purple w-full bg-white rounded-lg '></textarea>
                    <button type="submit" className='appearance-none outline-none focus:ring-0 caret-white bg-primary-blue/50 border-1  border-accent-600/70 text-text-100 rounded-lg p-1.5 hover:bg-background-800/50 hover:text-white transition-all duration-300'>Kirim</button>
                </form>
                
            </div>
        </section>
    );
};

export default KontakSection;