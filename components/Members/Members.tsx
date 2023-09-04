// import React, { useState } from "react";
// import Stack from "@mui/material/Stack";
// import data from "../../data/data";

// const Members = () => {

//     const [noOfMembers, setnoOfMembers] = useState<number>(2);
//     const loadMore = (): void => {
//       setnoOfMembers(noOfMembers + noOfMembers);
//     };
//     const slice = data.cardData.slice(0, noOfMembers);
    

//     return (
//         <section className="py-4 container">
//           <div className=" justify-content-center">
//             {slice.map((item, index) => {
//               return (
//                 <div className="d-flex flex-row" key={item.id}>
//                   <Stack spacing={2}>
//                     <div className="flex-row card p-0 overflow-hidden h-100 shadow">
//                       <img src={item.img} className="card-img-top" alt={item.title} />
//                       <div className="card-body">
//                         <h5 className="card-title">{item.title}</h5>
//                         <h6 className="card-title">{item.name}</h6>
//                         <p className="flex card-text">{item.desc}</p>
//                       </div>
//                     </div>
//                   </Stack>
//                 </div>
//               );
//             })}
      
//             <button className="btn btn-dark d-block w-100" onClick={() => loadMore()}>
//               Load More
//             </button>
//           </div>
//         </section>
//       );
      
      
      
      
      
      
    
// }

// export default Members;

