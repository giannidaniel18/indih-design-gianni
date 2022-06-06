import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Order/Order";
import LoadingSpinner from "../OtherComponents/Spinner/LoadingSpinner";


export default function OrderContainer() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "orders", id);
    getDoc(dbQuery)
      .then((ord) => setOrder({ id: ord.id, ...ord.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

 

  return (
    <div>
        {loading ? <LoadingSpinner/> :
     <Order order={order} />}
    </div>
  );
}
