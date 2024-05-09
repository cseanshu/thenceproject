import React from 'react';

function Animation() {
  return (
    <>
      <div >
        <img src="/girlimage.png" alt="girlimage" className="w-[400px] h-[400px] rounded-3xl absolute -z-10 ml-28 " />
        <div className="mobile__responsive--animation z-10 mt-10">
          {/* 40% div */}
          <div className="w-[200px] h-[235px] bg-slate-50 rounded-3xl border-1 ">
            <div><img src="/spark2.png" alt="sparkimage" className="w-20 h-20" /></div>
            <div className="relative -top-9 -left-5">
              <p className="text-4xl font-bold ml-10">40%</p>
              <p className="text-slate-500 text-lg text-start text-wrap ml-9 font-lg">Achieved Reduction in the Project Execution time by optimising team availability</p>
            </div>
          </div>

          <div className="flex  mt-14 ">
            {/* staff deployment div */}
            <div className="flex justify-around md:w-52 h-[90px] p-1 rounded-3xl bg-slate-100 ">
              <div className="w-12 h-12 rounded-[50%] mt-2 bg-slate-600"><img src="/aeroplane.png" alt="aeroplane" className=" mt-2 ml-3" /></div>
              <div className='mt-2'>
                <div><p className="font-bold text-xl">10 DAYS</p></div>
                <div><p className="text-slate-400">Staff Deployment</p></div>
              </div>
            </div>
            {/*  dollar div */}
            <div className="w-52 h-36 rounded-3xl bg-green-900 text-white ml-32 ">
              <div className="flex justify-around items-center text-wrap py-3 ">
                <p className="text-4xl font-bold">$0.5</p>
                <p className="text-slate-400 mt-4 mr-12 font-semibold">MILLION</p>
              </div>
              <p className="text-center text-wrap text-stone-300">Reduced client expenses by saving on hiring and employee costs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Animation;
