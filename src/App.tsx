import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "./utils/local-storage";
import { useEffect } from "react";
import { Skeleton } from "antd";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getFromLocalStorage("m366ictAuthKey-kamruzzaman")) {
      navigate("/dashboard/users");
    } else {
      navigate("/sign-in");
    }
  }, [navigate]);


  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", height: "100vh" }}>
      <div className="main-container">
        {
          [1, 2, 4, 5].map((item: number) => (
            <div key={item} style={{
              marginTop: "20px",
            }}>
              <Skeleton active />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
