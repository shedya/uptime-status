import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>目前检测频率为 5 分钟，如需在此监测您的网站，请发送域名至wo@diaonm.com</p>
          <p>&copy; 2022 bantk.com 保留所有权利 <a href='https://beian.miit.gov.cn/#/Integrated/index' target="_blank" rel="nofollow">桂ICP备2022008653号-1</a></p>
        </div>
      </div>
    </>
  );
}

export default App;
