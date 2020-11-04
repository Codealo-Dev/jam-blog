import Head from 'next/head'
import PostsGrid from '../components/home/PostsGrid'
import FacebookSvg from '../components/icons/FacebookSvg'
import InstagramSvg from '../components/icons/InstagramSvg'
import SendSvg from '../components/icons/SendSvg'
import TwitterSvg from '../components/icons/TwitterSvg'
import Navigator from '../components/layouts/Navigator'
import SocialSidebar from '../components/layouts/SocialSidebar'
import PostCard from '../components/posts/PostCard'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        <section className="mb-12 md:w-full lg:flex lg:items-center">
          <div className="flex-1 px-4 lg:px-0">
            <h1
              className="text-white text-5xl font-bold mb-4 lg:mb-8"
              style={{ textShadow: '0px 10px 50px rgba(255, 255, 255, 0.45)' }}
            >Bienvenido al Blog de Codealo</h1>
            <div className="hidden lg:block bg-primary mb-8" style={{ height: 5 }} />
            <div style={{ color: 'rgba(206, 206, 206, 0.5)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at
          </div>
            <div className="hidden lg:block">
              <h3 className="text-2xl text-white my-8">Registrate para más contenido</h3>
              <div className="flex">
                <div style={{ backgroundColor: '#252D40' }} className="rounded-full px-4 py-2 flex justify-center flex-1 mr-6">
                  <input
                    className="text-white w-full"
                    placeholder="Escribe tu email aqui"
                    style={{ backgroundColor: '#252D40' }}
                  />
                </div>
                <div>
                  <a href="/">
                    <div className="bg-secondary flex items-center justify-center rounded-full w-12 h-12">
                      <SendSvg className=" w-6 h-6 stroke-current fill-current text-white mr-1" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col items-center flex-1">
            <h4 className="text-center text-2xl text-white mb-8">Entradas Recientes</h4>
            <div className="mx-4">
              <PostCard post={{}} />
            </div>
          </div>
        </section>
        <section className="sm:hidden">
          <h4 className="text-center text-2xl text-white mb-8">Entradas Recientes</h4>
          <div className="mx-4">
            <PostCard post={{}} />
          </div>
        </section>
        <div className="h-1 bg-primary my-8 mx-1 sm:hidden" />
        <section>
          <div className="px-4 lg:px-8">
            <PostsGrid posts={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
