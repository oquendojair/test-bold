import { useEffect, useState } from 'react'
import Head from 'next/head'
import numeral from 'numeral'
import format from 'date-fns/format'
import cookie from 'js-cookie'

const data = [{
  transaction: true,
  date: new Date(),
  account: '12345678909',
  idBold: 'CGMADKKAKAK',
  amount: 25000,
  method: 'link'
}, {
  transaction: false,
  date: new Date(),
  account: '12345678909',
  idBold: 'CGMADKKAKAK',
  amount: 25000,
  method: 'datafono',
  deduction: 15000 
}]
function Home() {
  const [title, setTitle] = useState('hoy')
  const [values, setValues] = useState({})
  const [toggle, setToggle] = useState(false)
  const [filter, setFilter] = useState({})

  useEffect(() => {
    const cookies = cookie.getJSON('values')
    if(cookies) {
      if (cookies.datafono || cookies.link || cookies.all) setToggle(true)
      setValues(cookies)
      setFilter(cookies)
    }
  }, [])
  
  const hanldeFilter = () => {
    cookie.set('values', values)
    setFilter(values)
  }
  return (
    <div>
      <Head>
        <title>Bold</title>
      </Head>
      <div className="bg-gradient-to-r from-blue-bold to-red-bold p-6">
        <div className="max-w-screen-2xl mx-auto md:px-8">
          <div className="flex text-white justify-between items-center">
            <h1 className="text-3xl font-black">bold</h1>
            <div>
              <span className="mx-8">Mi negocio</span>
              <div className="inline-flex items-center">
                <span className="mx-1">Ayuda</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="md:col-span-1">
              <div className="shadow-md rounded-xl">
                <div className="bg-gradient-to-r from-red-700 to-red-bold p-3 rounded-tr-xl rounded-tl-xl">
                  <div className="flex justify-between text-white">
                    <span>Total de ventas septiembre</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white text-center p-5 rounded-br-xl rounded-bl-xl">
                  <h2 className="text-red-bold font-bold text-3xl">$1'560,000</h2>
                  <span className="text-blue-bold">septiembre, 2020</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div>
                <div className="bg-white text-blue-bold">
                  <div className="flex flex-wrap md:flex-nowrap md:justify-around p-1">
                    <button 
                      className="hover:bg-gray-300 p-2 rounded-full w-full focus:outline-none"
                      style={{background: title == 'hoy' ? 'rgba(209, 213, 219, var(--tw-bg-opacity))' : 'none'}}
                      onClick={() => setTitle('hoy')}
                      >
                      <span className="text-center font-bold">Hoy</span>
                    </button>
                    <button 
                      className="hover:bg-gray-300 p-2 rounded-full w-full focus:outline-none"
                      style={{background: title == 'semana' ? 'rgba(209, 213, 219, var(--tw-bg-opacity))' : 'none'}}
                      onClick={() => setTitle('semana')}
                      >
                      <span className="text-center font-bold">Esta semana</span>
                    </button>
                    <button 
                      className="hover:bg-gray-300 p-2 rounded-full w-full focus:outline-none"
                      style={{background: title == 'septiembre' ? 'rgba(209, 213, 219, var(--tw-bg-opacity))' : 'none'}}
                      onClick={() => setTitle('septiembre')}
                    >
                      <span className="text-center font-bold">Septiembre</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="ml-auto block bg-white hover:bg-gray-100 p-2 px-8 rounded-lg mt-5 focus:outline-none"
                  style={{ display: !toggle ? 'block' : 'none' }}
                  onClick={() => setToggle(!toggle)}
                >
                  <div>
                    <span className="uppercase text-blue-bold">Filtrar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-bold inline-flex ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </button>
                <div 
                  className="md:absolute right-0 mt-4"
                  style={{ display: toggle ? 'block' : 'none' }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 relative">
                    <div className="absolute right-2 top-2">
                      <button 
                        className="focus:outline-none"
                        onClick={() => setToggle(!toggle)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-bold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <span className="uppercase text-blue-bold text-center block">Filtrar</span>
                    <div className="mt-4">
                      <div>
                        <input 
                          type="checkbox" 
                          name="datafono"
                          onChange={e => setValues({...values, [e.target.name]: !values.datafono})}
                          checked={values.datafono}
                        />
                        <span className="mx-2 text-blue-bold font-medium">Cobro con datáfono</span>
                      </div>
                      <div>
                        <input 
                          type="checkbox" 
                          name="link"
                          onChange={e => setValues({...values, [e.target.name]: !values.link})}  
                          checked={values.link}
                        />
                        <span className="mx-2 text-blue-bold font-medium">Cobro con link de pago</span>
                      </div>
                      <div>
                        <input 
                          type="checkbox" 
                          name="all"
                          onChange={e => setValues({...values, [e.target.name]: !values.all})}  
                          checked={values.all}
                        />
                        <span className="mx-2 text-blue-bold font-medium">Ver todos</span>
                      </div>
                      <div>
                        <button 
                          className="bg-red-bold rounded-full px-10 p-1 mt-4 text-white mx-auto block focus:outline-none"
                          onClick={hanldeFilter}
                        >
                          Aplicar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-white rounded-xl mt-4 shadow-md">
            <div className="bg-gradient-to-r from-blue-900 to-blue-bold p-2 px-4 rounded-tr-xl rounded-tl-xl">
              <span className="text-lg md:text-2xl text-white">Tus ventas de <span>{title}</span></span>
            </div>
            <div>
              <div className="overflow-x-scroll md:overflow-x-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="font-medium text-left text-gray-500 p-3">Transacción</th>
                      <th className="font-medium text-left text-gray-500 p-3">Fecha y hora</th>
                      <th className="font-medium text-left text-gray-500 p-3">Método de pago</th>
                      <th className="font-medium text-left text-gray-500 p-3">ID transacción bold</th>
                      <th className="font-medium text-left text-gray-500 p-3">Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter(item => filter.datafono && item.method == 'datafono' || filter.link && item.method == 'link' || filter.all && item || !filter.datafono && !filter.link && !filter.all && item || !toggle && item)
                      .map((item, index) => 
                        <tr 
                          className="border-b" 
                          style={{ borderLeft: `${item.transaction ? '#111e6c' : '#969696'} 4px solid` }} 
                          key={index}
                        >
                          <td className="p-3 font-medium text-gray-400">
                            <div className="flex items-center space-x-1 text-blue-bold">
                              {item.method == "link" && 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                              }
                              {item.method == 'datafono' && 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              }
                              <span>{item.transaction ? 'Cobro exitoso' : 'Cobro no realizado'}</span>
                            </div>
                          </td>
                          <td className="p-3 font-medium text-gray-400">
                            {format(item.date, 'd/MM/yyyy - HH:mm:ss')}
                          </td>
                          <td className="p-3 font-medium text-gray-400">
                            <div className="flex space-x-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                              <span>{item.account}</span>
                            </div>
                          </td>
                          <td className="p-3 font-medium text-gray-400">
                            <span className="uppercase">
                              {item.idBold}
                            </span>
                          </td>
                          <td className="p-3 font-medium text-gray-400">
                            <span className="text-blue-bold">
                              {numeral(item.amount).format('$0,0')}
                            </span>
                            {item.deduction &&
                              <div>
                                <span>Deducción bold</span>
                                <span className="block text-red-400">-{numeral(item.deduction).format('$0,0')}</span>
                              </div>
                            }
                          </td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background: #e5e7ef
        }
      `}</style>
    </div>
  )
}

export default Home