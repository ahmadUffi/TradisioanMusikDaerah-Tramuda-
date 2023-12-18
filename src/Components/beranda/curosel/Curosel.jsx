import Box from "./box/Box";
import items from "../../../source";
import "./curosel.css";

function Curosel() {
  return (
    <div className="curosel">
      {items.map((item) => (
        <Box
          key={item.id}
          gambar={item.img}
          title={item.nama}
          asal={item.asal}
          paragraf={item.p1}
          caraMain={item.memainkan}
          delay={item.id}
          allItem={item}
        />
      ))}
    </div>
  );
}

export default Curosel;
