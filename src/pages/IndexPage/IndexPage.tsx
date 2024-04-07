import './IndexPage.css';
import axios from "axios";
import { useMemo, type FC, useEffect, useContext } from 'react';
import { Page } from "../../components/Page";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';
import { User } from '@tma.js/sdk';
import { useInitData } from '@tma.js/sdk-react';
import { SetupTeam } from '../../components/Cards/SetupTeam.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerInformationCard } from '../../components/Cards/BannerInformationCard.tsx';
import { apiRoutes } from '../../api/apiRoutes.tsx';
import { BASE_URL } from '../../constants/constant.tsx';
import { AuthProviderProps } from '../../components/Type/type.tsx';
import { AuthContext } from '../../context/AuthContext.tsx';

async function connectAPI(params: any) {
  const connect = await axios.post(
      `${BASE_URL}${apiRoutes.useTelegramIDConnect}`,
      params,
      {
        headers: {
            'Content-Type': 'application/json',
        },
      }
  )
  .then(async (res) => {
    await AsyncStorage.setItem("UserLogin", JSON.stringify(res.data));
  });

  return await connect;
}

export const IndexPage: FC = () => {
    const initData = useInitData();
    const userObj = useMemo<User | undefined>(() => {

      if (!initData) {
        return;
      }

      const { user } = initData;
      return user;
    }, [initData]);

    const apiUser = useMemo<any>(async() => {
        const user = await AsyncStorage.getItem("UserLogin");
        if ( user != null ) {
          return JSON.parse(user).data.user;
        }

        return null;
    }, []);

    const { userInfo, isLoading } = useContext<any>(AuthContext);

    useEffect(() => {
      
    }, []);

  return (
    <Page title="Dashboard">
      { isLoading && userInfo
          ? (
            <>
              <BannerInformationCard
                id={userInfo?.user?.id}
                code={userInfo?.user?.name}
                name={userInfo?.user?.name}
                teamName={userInfo?.user?.name}
                photoUrl={userInfo?.user?.name}
              />
              <SetupTeam />
              <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Page>
  );
};
