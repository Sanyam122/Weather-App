import "./index.css";
import "./index.css";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type WeatherInfo = {
  city: string;
  temp: number;
  humidity: number;
  weather: string;
  feelsLike: number;
};

type InfoBoxProps = {
  info: WeatherInfo;
};

const InfoBox = ({ info }: InfoBoxProps) => {
  console.log(info.feelsLike);
  return (
    <>
      <div className='my-4 flex align-items-center flex-col justify-content-center gap-2 '>
        <h1 className='text-6xl font-bold'>{info.temp}°</h1>
        <h4 className='text-center font-bold opacity-75'>{info.city}</h4>
      </div>
      <div className='grid grid-cols-2 gap-10 '>
        {/* Card 1 */}
        <MuiCard
          sx={{
            minWidth: 200,
            borderRadius: "60px",
            overflow: "hidden",
            backgroundColor: "#FCFBF4",
            padding: "1rem",
          }}
        >
          <CardContent className='text-center'>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: "bold",
                opacity: 0.75,
                marginBottom: "1rem",
              }}
            >
              🌡️ Temprature
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: "bold",
              }}
            >
              {info.temp}&deg;C
            </Typography>
          </CardContent>
        </MuiCard>

        {/* Card2 */}
        <MuiCard
          sx={{
            minWidth: 200,
            borderRadius: "60px",
            overflow: "hidden",
            backgroundColor: "#FCFBF4",
            padding: "1rem",
          }}
        >
          <CardContent className='text-center'>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: "bold",
                opacity: 0.75,
                marginBottom: "1rem",
              }}
            >
              💧 Humidity
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: "bold",
              }}
            >
              {info.humidity}%
            </Typography>
          </CardContent>
        </MuiCard>

        {/* Card3 */}
        <MuiCard
          sx={{
            minWidth: 200,
            borderRadius: "60px",
            overflow: "hidden",
            backgroundColor: "#FCFBF4",
            padding: "1rem",
          }}
        >
          <CardContent className='text-center'>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: "bold",
                opacity: 0.75,
                marginBottom: "1rem",
              }}
            >
              ☀️ Weather
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: "bold",
              }}
            >
              {info.weather}
            </Typography>
          </CardContent>
        </MuiCard>

        {/* Card4 */}
        <MuiCard
          sx={{
            minWidth: 200,
            borderRadius: "60px",
            overflow: "hidden",
            backgroundColor: "#FCFBF4",
            padding: "1rem",
          }}
        >
          <CardContent className='text-center'>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: "bold",
                opacity: 0.75,
                marginBottom: "1rem",
              }}
            >
              🧊 Feels Like
            </Typography>

            <Typography
              variant='h5'
              sx={{
                fontWeight: "bold",
              }}
            >
              {info.feelsLike}
            </Typography>
          </CardContent>
        </MuiCard>
      </div>
    </>
  );
};

export default InfoBox;
