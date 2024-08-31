"use client"
import createCLibraryModule from "c-library-wrapper";
import type { CLibrary } from "c-library-wrapper";
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const cLibraryRef = useRef<CLibrary | undefined>();
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number | null>(null);

  useEffect(() => {
    const data = async() => {
        console.log(122);
        let cLibraryModule = await createCLibraryModule();
        cLibraryRef.current = new cLibraryModule.CLibrary();
      };
    data();

  }, []);

  const onClickHandler = async () => {
    if (cLibraryRef.current) {
      setZ(cLibraryRef.current.add(x, y));
      console.log(z);
    }
  };

  return (
    <>
      <div>
        x: <input type="number" value={x} onChange={(e) => setX(e.target.value)}/>
      </div>
      <div>
        y: <input type="number" value={y} onChange={(e) => setY(e.target.value)}/>
      </div>
      <div>
        x + y: {z}
      </div>

      <div>
        <button onClick={onClickHandler}>calc</button>
      </div>
    </>
  );
}
