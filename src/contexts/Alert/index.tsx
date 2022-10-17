import React, {createContext, useCallback, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';

type AlertContent = {
  title: string;
  message: string;
  cb?: () => void;
};

type AlertContextValues = {
  alert: (payload: AlertContent) => void;
};

const AlertContext = createContext({} as AlertContextValues);

const AlertContextProvider: React.FC = ({children}) => {
  const [content, setContent] = useState<AlertContent>();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    if (typeof content?.cb === 'function') {
      content.cb();
    }

    setIsVisible(false);
  }, [content]);

  const alert = useCallback((payload: AlertContent) => {
    setContent(payload);
    setIsVisible(true);
  }, []);

  return (
    <AlertContext.Provider value={{alert}}>
      {children}
      <Modal
        visible={Boolean(isVisible && content)}
        transparent
        animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 64,
            marginVertical: 128,
            marginHorizontal: 32,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 12,
            }}>
            {content?.title}
          </Text>

          <Text>{content?.message}</Text>

          <Button title="Fechar" onPress={closeModal} />
        </View>
      </Modal>
    </AlertContext.Provider>
  );
};

export {AlertContext, AlertContextProvider};
