import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Abstract from "./Abstract";
import { motion } from "framer-motion";

const ThreeJSModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 4, ease: "easeInOut" }}
    >
      <Canvas style={{ width: "100vw", height: "50vh", cursor: "grab", marginTop: "70px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <directionalLight position={[-2, -5, -2]} intensity={1} />
        <Suspense fallback={null}>
          <Abstract />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ThreeJSModel;
