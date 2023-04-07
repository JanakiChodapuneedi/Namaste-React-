const Shimmer = () => {
    return <div className="flex flex-wrap">
       { Array(20).fill("").map((e,index)=> <div key={index} className="w-48 h-60 m-5 bg-gray-400"></div>)}
    </div>
};

export default Shimmer;

