import React, { useEffect, useState } from 'react';

import { Container, Table } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

interface MarsProps {
  755: {
    Last_UTC: string;
    Season: string;

    AT: {
      av: number;
      mn: number;
      mx: number;
    };
  };

  756: {
    Last_UTC: string;
    Season: string;

    PRE: {
      av: number;
      mn: number;
      mx: number;
    };
  };

  757: {
    Last_UTC: string;
    Season: string;

    AT: {
      av: number;
      mn: number;
      mx: number;
    };

    PRE: {
      av: number;
      mn: number;
      mx: number;
    };
  };

  758: {
    Last_UTC: string;
    Season: string;

    PRE: {
      av: number;
      mn: number;
      mx: number;
    };
  };

  759: {
    Last_UTC: string;
    Season: string;

    PRE: {
      av: number;
      mn: number;
      mx: number;
    };
  };

  760: {
    Last_UTC: string;
    Season: string;

    PRE: {
      av: number;
      mn: number;
      mx: number;
    };
  };
}

const InSightMars: React.FC = () => {
  const [marsInfo, setMarsInfo] = useState<MarsProps>();

  useEffect(() => {
    api
      .get(
        'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
      )
      .then((response) => setMarsInfo(response.data));
  }, []);

  // Date
  let formattedSol755Date = marsInfo?.[755].Last_UTC.slice(0, 10);
  let formattedSol756Date = marsInfo?.[756].Last_UTC.slice(0, 10);
  let formattedSol757Date = marsInfo?.[757].Last_UTC.slice(0, 10);
  let formattedSol758Date = marsInfo?.[758].Last_UTC.slice(0, 10);
  let formattedSol759Date = marsInfo?.[759].Last_UTC.slice(0, 10);
  let formattedSol760Date = marsInfo?.[760].Last_UTC.slice(0, 10);

  // Degrees
  let formattedSol757MaxDegrees = marsInfo?.[757].AT.mx.toFixed(1);
  let formattedSol757MinDegrees = marsInfo?.[757].AT.mn.toFixed(1);
  let formattedSol757AvgDegrees = marsInfo?.[757].AT.av.toFixed(1);

  let formattedSol755MaxDegrees = marsInfo?.[755].AT.mx.toFixed(1);
  let formattedSol755MinDegrees = marsInfo?.[755].AT.mn.toFixed(1);
  let formattedSol755AvgDegrees = marsInfo?.[755].AT.av.toFixed(1);

  // Pressure
  let formattedSol756MaxPressure = marsInfo?.[756].PRE.mx.toFixed();
  let formattedSol756MinPressure = marsInfo?.[756].PRE.mn.toFixed();
  let formattedSol756AvgPressure = marsInfo?.[756].PRE.av.toFixed();

  let formattedSol757MaxPressure = marsInfo?.[757].PRE.mx.toFixed();
  let formattedSol757MinPressure = marsInfo?.[757].PRE.mn.toFixed();
  let formattedSol757AvgPressure = marsInfo?.[757].PRE.av.toFixed();

  let formattedSol758MaxPressure = marsInfo?.[758].PRE.mx.toFixed();
  let formattedSol758MinPressure = marsInfo?.[758].PRE.mn.toFixed();
  let formattedSol758AvgPressure = marsInfo?.[758].PRE.av.toFixed();

  let formattedSol759MaxPressure = marsInfo?.[759].PRE.mx.toFixed();
  let formattedSol759MinPressure = marsInfo?.[759].PRE.mn.toFixed();
  let formattedSol759AvgPressure = marsInfo?.[759].PRE.av.toFixed();

  let formattedSol760MaxPressure = marsInfo?.[760].PRE.mx.toFixed();
  let formattedSol760MinPressure = marsInfo?.[760].PRE.mn.toFixed();
  let formattedSol760AvgPressure = marsInfo?.[760].PRE.av.toFixed();

  return (
    <Container>
      <Header headerTitle="Mars Weather" />

      <Table>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Mars-Day</th>
              <th>Season</th>

              <td>Max. Degrees</td>
              <td>Avg. Degrees</td>
              <td>Min. Degrees</td>

              <td className="pressure">Max. Pressure</td>
              <td className="pressure">Avg. Pressure</td>
              <td className="pressure">Min. Pressure</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol755Date}</th>
              <th className="sub-th">755</th>
              <th className="sub-th">{marsInfo?.[755].Season}</th>

              <td>{`${formattedSol755MaxDegrees}° C`}</td>
              <td>{`${formattedSol755AvgDegrees}° C`}</td>
              <td>{`${formattedSol755MinDegrees}° C`}</td>

              <td className="pressure">-</td>
              <td className="pressure">-</td>
              <td className="pressure">-</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol756Date}</th>
              <th className="sub-th">756</th>
              <th className="sub-th">{marsInfo?.[756].Season}</th>

              <td>-° C</td>
              <td>-° C</td>
              <td>-° C</td>

              <td className="pressure">{formattedSol756MaxPressure}</td>
              <td className="pressure">{formattedSol756MinPressure}</td>
              <td className="pressure">{formattedSol756AvgPressure}</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol757Date}</th>
              <th className="sub-th">757</th>
              <th className="sub-th">{marsInfo?.[757].Season}</th>

              <td>{`${formattedSol757MaxDegrees}° C`}</td>
              <td>{`${formattedSol757AvgDegrees}° C`}</td>
              <td>{`${formattedSol757MinDegrees}° C`}</td>

              <td className="pressure">{formattedSol757MaxPressure}</td>
              <td className="pressure">{formattedSol757MinPressure}</td>
              <td className="pressure">{formattedSol757AvgPressure}</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol758Date}</th>
              <th className="sub-th">758</th>
              <th className="sub-th">{marsInfo?.[758].Season}</th>

              <td>-° C</td>
              <td>-° C</td>
              <td>-° C</td>

              <td className="pressure">{formattedSol758MaxPressure}</td>
              <td className="pressure">{formattedSol758MinPressure}</td>
              <td className="pressure">{formattedSol758AvgPressure}</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol759Date}</th>
              <th className="sub-th">759</th>
              <th className="sub-th">{marsInfo?.[759].Season}</th>

              <td>-° C</td>
              <td>-° C</td>
              <td>-° C</td>

              <td className="pressure">{formattedSol759MaxPressure}</td>
              <td className="pressure">{formattedSol759MinPressure}</td>
              <td className="pressure">{formattedSol759AvgPressure}</td>
            </tr>

            <tr>
              <th className="sub-th">{formattedSol760Date}</th>
              <th className="sub-th">760</th>
              <th className="sub-th">{marsInfo?.[760].Season}</th>

              <td>-° C</td>
              <td>-° C</td>
              <td>-° C</td>

              <td className="pressure">{formattedSol760MaxPressure}</td>
              <td className="pressure">{formattedSol760MinPressure}</td>
              <td className="pressure">{formattedSol760AvgPressure}</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  );
};

export default InSightMars;
