import imgLogin from '../../assets/levitate-unscreen.gif'

export default function Login() {
  return (
    <section className="">
      <div  className="flex justify-start  m-5 mt-40" >

        <form className=" w-[500px]  ">
          <div className="text-sm text-gray-500 pt-2 w-full">
            <p className="m-1">
              <a className="text-slate-900 font-bold">

              EMAIL

              </a>
            </p>
            <input
              type="email"
              className="w-full h-10 bg-orange-100 border-none"
              placeholder="email"
            />
          </div>

          <div className="text-sm text-gray-500 pt-2 w-full">
          <p className="m-1">
              <a className="text-slate-900 font-bold">

              SENHA

              </a>
            </p>
         <input

           className="w-full h-10 bg-orange-100 border-none"
           placeholder="senha"
          />
          </div>


          <div className="mt-5  ">
          <button className="w-24 h-10 mt-5
          bg-red-400  hover:bg-red-500 font-bold">
                        enviar
                      </button>
          </div>
        </form>

        <div className='m-2 ml-52 '>
        <img src={imgLogin} alt="" className='h-[400px] w-[500px] bg-slate-100' />
      </div>

      </div>

    </section>
  );
}
