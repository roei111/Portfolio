import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "15vh",
    margin: "0 auto",
  },
  svg: {
    width: "auto",
    alignSelf: "flex-start",
    "& path": {
      stroke: "currentColor",
      strokeWidth: "5",
    },
  },
}));

const pathVariants = {
  hidden: (mode) => ({
    pathLength: 0,
    //Change fill color based on the theme mode
    fill: mode === "dark" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)",
  }),
  visible: (mode) => ({
    pathLength: 1,
    fill: mode === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
    transition: {
      default: { duration: 3, ease: "easeInOut" },
      fill: { duration: 1.5, ease: [1, 0, 0.8, 1], delay: 1 },
    },
  }),
};

const pathAttributes = {
  initial: "hidden",
  animate: "visible",
};

const AnimationName = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <div className={classes.wrapper}>
      <svg
        width="626"
        height="100%"
        viewBox="0 0 626 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classes.svg}
      >
        <motion.path
          d="M65.936 105L42.032 63.96H26.192V105H13.088V4.63198H45.488C53.072 4.63198 59.456 5.92798 64.64 8.51998C69.92 11.112 73.856 14.616 76.448 19.032C79.04 23.448 80.336 28.488 80.336 34.152C80.336 41.064 78.32 47.16 74.288 52.44C70.352 57.72 64.4 61.224 56.432 62.952L81.632 105H65.936ZM26.192 53.448H45.488C52.592 53.448 57.92 51.72 61.472 48.264C65.024 44.712 66.8 40.008 66.8 34.152C66.8 28.2 65.024 23.592 61.472 20.328C58.016 17.064 52.688 15.432 45.488 15.432H26.192V53.448Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M146.201 106.008C136.889 106.008 128.393 103.848 120.713 99.528C113.033 95.112 106.937 89.016 102.425 81.24C98.0094 73.368 95.8014 64.536 95.8014 54.744C95.8014 44.952 98.0094 36.168 102.425 28.392C106.937 20.52 113.033 14.424 120.713 10.104C128.393 5.68798 136.889 3.47998 146.201 3.47998C155.609 3.47998 164.153 5.68798 171.833 10.104C179.513 14.424 185.561 20.472 189.977 28.248C194.393 36.024 196.601 44.856 196.601 54.744C196.601 64.632 194.393 73.464 189.977 81.24C185.561 89.016 179.513 95.112 171.833 99.528C164.153 103.848 155.609 106.008 146.201 106.008ZM146.201 94.632C153.209 94.632 159.497 93 165.065 89.736C170.729 86.472 175.145 81.816 178.313 75.768C181.577 69.72 183.209 62.712 183.209 54.744C183.209 46.68 181.577 39.672 178.313 33.72C175.145 27.672 170.777 23.016 165.209 19.752C159.641 16.488 153.305 14.856 146.201 14.856C139.097 14.856 132.761 16.488 127.193 19.752C121.625 23.016 117.209 27.672 113.945 33.72C110.777 39.672 109.193 46.68 109.193 54.744C109.193 62.712 110.777 69.72 113.945 75.768C117.209 81.816 121.625 86.472 127.193 89.736C132.857 93 139.193 94.632 146.201 94.632Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M227.004 15.288V48.84H263.581V59.64H227.004V94.2H267.901V105H213.9V4.48799H267.901V15.288H227.004Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M300.833 4.63198V105H287.729V4.63198H300.833Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M83.36 148.632L50.672 211.128V249H37.568V211.128L4.73599 148.632H19.28L44.048 199.464L68.816 148.632H83.36Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M156.51 226.68H112.734L104.67 249H90.8457L127.134 149.208H142.254L178.398 249H164.574L156.51 226.68ZM152.766 216.024L134.622 165.336L116.478 216.024H152.766Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M259.301 226.68H215.525L207.461 249H193.637L229.925 149.208H245.045L281.189 249H267.365L259.301 226.68ZM255.557 216.024L237.413 165.336L219.269 216.024H255.557Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M292.108 198.744C292.108 188.952 294.316 180.168 298.732 172.392C303.148 164.52 309.148 158.376 316.732 153.96C324.412 149.544 332.908 147.336 342.22 147.336C353.164 147.336 362.716 149.976 370.876 155.256C379.036 160.536 384.988 168.024 388.732 177.72H373.036C370.252 171.672 366.22 167.016 360.94 163.752C355.756 160.488 349.516 158.856 342.22 158.856C335.212 158.856 328.924 160.488 323.356 163.752C317.788 167.016 313.42 171.672 310.252 177.72C307.084 183.672 305.5 190.68 305.5 198.744C305.5 206.712 307.084 213.72 310.252 219.768C313.42 225.72 317.788 230.328 323.356 233.592C328.924 236.856 335.212 238.488 342.22 238.488C349.516 238.488 355.756 236.904 360.94 233.736C366.22 230.472 370.252 225.816 373.036 219.768H388.732C384.988 229.368 379.036 236.808 370.876 242.088C362.716 247.272 353.164 249.864 342.22 249.864C332.908 249.864 324.412 247.704 316.732 243.384C309.148 238.968 303.148 232.872 298.732 225.096C294.316 217.32 292.108 208.536 292.108 198.744Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M453.743 250.008C444.431 250.008 435.935 247.848 428.255 243.528C420.575 239.112 414.479 233.016 409.967 225.24C405.551 217.368 403.343 208.536 403.343 198.744C403.343 188.952 405.551 180.168 409.967 172.392C414.479 164.52 420.575 158.424 428.255 154.104C435.935 149.688 444.431 147.48 453.743 147.48C463.151 147.48 471.695 149.688 479.375 154.104C487.055 158.424 493.103 164.472 497.519 172.248C501.935 180.024 504.143 188.856 504.143 198.744C504.143 208.632 501.935 217.464 497.519 225.24C493.103 233.016 487.055 239.112 479.375 243.528C471.695 247.848 463.151 250.008 453.743 250.008ZM453.743 238.632C460.751 238.632 467.039 237 472.607 233.736C478.271 230.472 482.687 225.816 485.855 219.768C489.119 213.72 490.751 206.712 490.751 198.744C490.751 190.68 489.119 183.672 485.855 177.72C482.687 171.672 478.319 167.016 472.751 163.752C467.183 160.488 460.847 158.856 453.743 158.856C446.639 158.856 440.303 160.488 434.735 163.752C429.167 167.016 424.751 171.672 421.487 177.72C418.319 183.672 416.735 190.68 416.735 198.744C416.735 206.712 418.319 213.72 421.487 219.768C424.751 225.816 429.167 230.472 434.735 233.736C440.399 237 446.735 238.632 453.743 238.632Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M571.698 197.304C575.346 197.88 578.658 199.368 581.634 201.768C584.706 204.168 587.106 207.144 588.834 210.696C590.658 214.248 591.57 218.04 591.57 222.072C591.57 227.16 590.274 231.768 587.682 235.896C585.09 239.928 581.298 243.144 576.306 245.544C571.41 247.848 565.602 249 558.882 249H521.442V148.632H557.442C564.258 148.632 570.066 149.784 574.866 152.088C579.666 154.296 583.266 157.32 585.666 161.16C588.066 165 589.266 169.32 589.266 174.12C589.266 180.072 587.634 185.016 584.37 188.952C581.202 192.792 576.978 195.576 571.698 197.304ZM534.546 191.976H556.578C562.722 191.976 567.474 190.536 570.834 187.656C574.194 184.776 575.874 180.792 575.874 175.704C575.874 170.616 574.194 166.632 570.834 163.752C567.474 160.872 562.626 159.432 556.29 159.432H534.546V191.976ZM557.73 238.2C564.258 238.2 569.346 236.664 572.994 233.592C576.642 230.52 578.466 226.248 578.466 220.776C578.466 215.208 576.546 210.84 572.706 207.672C568.866 204.408 563.73 202.776 557.298 202.776H534.546V238.2H557.73Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M622.858 148.632V249H609.754V148.632H622.858Z"
          custom={mode}
          variants={pathVariants}
          {...pathAttributes}
        />
      </svg>
    </div>
  );
};

export default AnimationName;
