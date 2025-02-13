// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Soumyajit Behera</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} SB</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://twitter.com/Soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/soumyajit4419/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../animation/animate";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  GitHub,
  Pinterest,
  LinkedIn,
} from "@mui/icons-material";
import Logo from "./Logo/Logo";


const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={motion.footer}
      bgcolor="rgb(10, 4, 22)"
      color="white"
      py={6}
      width="100%"
      overflow="hidden"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Company info section */}
          <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
            <motion.div
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
            >
              <Box display="flex" justifyContent={isMobile ? "center" : "left"} mb={2}>
                {/* <img
                  src={LogoPng}
                  alt="Logo"
                  style={{ maxWidth: "150px", height: "auto" }}
                /> */}
                <Logo />
              </Box>
              <Typography variant="h6" color="burlywood">
                Where design meets your dream lifestyle.
              </Typography>
              <Box mt={2} display="flex" justifyContent={isMobile ? "center" : "left"}>
                <IconButton color="inherit" href="https://github.com/Rudreshcg"><GitHub /></IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/in/rudreshcg/"><LinkedIn /></IconButton>
                <IconButton color="inherit" href="https://www.facebook.com/thenameis.rudresh/"><Facebook /></IconButton>
                <IconButton color="inherit" href="https://twitter.com/rudreshcg"><Twitter /></IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/thenameis_rudresh"><Instagram /></IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
            <motion.div
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Useful Links
              </Typography>
              <Box mt={2}>
                <Link href="/about" color="inherit" display="block" mb={1}>
                  About Us
                </Link>
                <Link href="#" color="inherit" display="block" mb={1}>
                  Contact Us
                </Link>
                <Link href="#" color="inherit" display="block" mb={1}>
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" display="block" mb={1}>
                  Terms & Conditions
                </Link>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
            <motion.div
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Call
              </Typography>
              <Typography mt={2}>+91-9663383747</Typography>
              <Typography variant="h6" fontWeight="bold" mt={4}>
                Write
              </Typography>
              <Typography mt={2}>
                <Link href="mailto:info@tvashtainterior.com" color="inherit">
                  rudreshcsbg82@gmail.com
                </Link>
              </Typography>
            </motion.div>
          </Grid>

          {/* Visit Us */}
          <Grid item xs={12} md={3} textAlign={isMobile ? "center" : "left"}>
            <motion.div
              variants={SlideLeft(0.5)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Visit
              </Typography>
              {/* <Typography mt={2}>Tvashta Interior</Typography> */}
              <Typography mt={2}>
                Bangalore - 560067
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom section */}
        <Typography
          textAlign="center"
          variant="body2"
          fontWeight="bold"
          borderTop={2}
          pt={3}
          mt={5}
        >
          &copy; 2024 Rudresh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
