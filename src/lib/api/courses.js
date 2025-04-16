export const getCourses = async () => {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/getall_subject", {
            method: "GET",
          });
          const data =await res.json();
          return data;
          

    } catch (error) {
        console.log(error);
    }

}

//   const handlerClick = async () => {


//     //     const res = fetch("http://127.0.0.1:8000/api/getall_subject", {
//     //       method: "GET",
//     //     })
//     //     res.then((body) => {
//     //       return body.json();

//     //     }).then((data) => {
//     //       console.log(data);

//     //     })
//     // .catch((err) => {
//     //       console.log(err);
//     //     })

// }
  