import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { request } from "../../core/utils/request";
import { Box, Skeleton } from "@mui/material";
import AsideDropdown from "../items/Dropdown";

const asideStyle = {
  position: "fixed",
  height: "100%",
  bgcolor: "#38444d",
  fontSize: "32px",
  maxHeight: "100%",
  overflow: "auto",
  color: "white",
  p: "25px",
  minWidth: "320px",
  maxWidth: "320px",
};

const Aside = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    request("http://localhost:3000/api/navigation")
      .then((res) => {
        // промис, когда request выполнится он вернет объект с 3 мя функциями
        //  catch выполнится при ошибке
        // then когда нет ошибки
        // finaly в любом случае выполнится
        setLinks(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <AsideSkeleton />;

  return (
    <Box component="aside" sx={asideStyle}>
      <nav>
        {links.map((link) => (
          <AsideDropdown
            key={link.id}
            title={link.title}
            links={link.lessons}
          />
        ))}
      </nav>
    </Box>
  );
};

export default Aside;

const AsideSkeleton = () => (
  <Box component="aside" sx={asideStyle}>
    {/* <CircularProgress /> */}
    <Skeleton
      variant="rounted"
      sx={{ bgcolor: "grey.600", mb: "12px" }}
      height={40}
    />
    <Skeleton
      variant="rounted"
      sx={{ bgcolor: "grey.600", mb: "12px" }}
      height={40}
    />
    <Skeleton
      variant="rounted"
      sx={{ bgcolor: "grey.600", mb: "12px" }}
      height={40}
    />
  </Box>
);
