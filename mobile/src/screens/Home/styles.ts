import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
          backgroundColor: '#191919',
          flex: 1,
     },
     newTask: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          marginTop: -30,
     },
     input: {
          width: 256,
          height: 54,
          padding: 16,
          backgroundColor: '#262626',
          color: '#fff',
          borderColor: '#0D0D0D',
          borderWidth: 1,
          borderRadius: 6,
     },
     button: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 52,
          height: 52,
          padding: 16,
          backgroundColor: '#1E6F9F',
          borderRadius: 6,
     },
     tasksContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
          width: '100%',
     },
     tasksHeader: {
          width: 327,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#333333'
     },
     taskCreated: {
          flexDirection: 'row',
          gap: 8
     },
     textTaskCreated: {
          color: '#4EA8DE',
          fontSize: 14,
          fontWeight: 'bold',
     },
     amountTaskCreated: {
          backgroundColor: '#333333',
          color: '#fff',
          width: 25,
          height: 19,
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 999
     },
     taskDone: {
          flexDirection: 'row',
          gap: 8
     },
     textTaskDone: {
          color: '#8284FA',
          fontSize: 14,
          fontWeight: 'bold',
     },
     amountTaskDone: {
          backgroundColor: '#333333',
          color: '#fff',
          width: 25,
          height: 19,
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 999
     }
});