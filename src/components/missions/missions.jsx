import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

import MissionData from './mData';
import './mission.css';

const headList = [
  {
    id: 1,
    title: 'Mission',
  },
  {
    id: 2,
    title: 'Description',
  },
  {
    id: 3,
    title: 'Status',
  },
  {
    id: 4,
    title: ' ',
  },
];

const Missions = () => {
  const missionsList = useSelector((state) => state.missionReducer);
  return (
    <div className="container-fluid missions">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headList.map((item) => (
              <th key={item.id} className="fs-5">{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <MissionData key={mission.id} mission={mission} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
