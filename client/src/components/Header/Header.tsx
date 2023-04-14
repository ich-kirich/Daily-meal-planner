import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <AppBar className={styles.topBar}>
      <Container maxWidth="lg">
        <Toolbar className={styles.topBar_wrapper}>
          <Typography variant="h6" component="h1">
            <Link to="/" className={styles.topBar__link}>
              Ежедневный планировщик питания
            </Link>
          </Typography>
          <Typography variant="h6" component="h1">
            <Link to="/plan" className={styles.topBar__link}>
              Ежедневный план питания
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
