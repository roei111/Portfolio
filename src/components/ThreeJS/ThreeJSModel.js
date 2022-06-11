import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Abstract from "./Abstract";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  canvas: {
    width: "100vw !important", height: "50vh !important", cursor: "grab", marginTop: "70px",
    [theme.breakpoints.up("lg")]: {
      height: "85vh !important",
      width: "50vw !important",
      marginTop: "0",
      marginBottom: "50px"
    },
  },
}));

const ThreeJSModel = () => {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 4, ease: "easeInOut" }}
    >
      <Canvas className={classes.canvas}>
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
