import styles from "@/styles/housePage.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SearchHouse({ data }) {
  // useEffect(() => {
  //     fetch("https://api.npoint.io/42a9520e5ee53e455f61")
  //     .then((res)=>res.json())
  //     .then(console.log)
  // }, [])



    return (
      <div className={styles.page}>
        <div>Qui puoi trovare la casa dei tuoi sogni</div>
        <h2>House</h2>
        {data.House.map((House) => (
          <div key={House.id}>
            <h3>{House.houseName}</h3>
            <div className={styles.carousel}>
              {House.imgHouse.map((image, index) => (
                <img key={index} src={image} alt={House.houseName} />
              ))}
            </div>
            <p>Price per night: {House.priceForNight}</p>
          </div>
        ))}
      </div>
    );
  }
  
  
export async function getServerSideProps() {
  const res = await fetch("https://api.npoint.io/42a9520e5ee53e455f61");
  const data = await res.json();

  console.log(data);
  return {
    props: {
      data,
    },
  };
}
