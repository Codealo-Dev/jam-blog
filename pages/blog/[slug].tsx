import Head from 'next/head';
import React, { useState } from 'react'
import Navigator from '../../components/layouts/Navigator';
import DefaultLayout from '../../layouts/DefaultLayout';

interface Props {
  post: any
}

const Index: React.FC<Props> = (props) => {
  return (
    <DefaultLayout>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-3/4 lg:pr-16">
          <h3 className="text-white mb-10">Escrito por: <span className="text-secondary">Codealo</span></h3>
          <h1 className="text-white text-4xl leading-none mb-16">Hola estamos aqui adentro</h1>
          <div className="space-y-4 mb-8">
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus pellentesque ut integer aliquam eget mattis. Vulputate turpis rutrum bibendum eleifend at at</p>
          </div>
          <div className="text-sm text-primary">09 / octubre / 2020</div>
        </div>
        <div className="lg:mr-16">
          <div className="rounded-xl mb-8">
            <img src="/imgs/placeholder.png" className="rounded-xl" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}


export default Index;