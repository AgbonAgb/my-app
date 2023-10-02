import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationSnackbar, NotificationProvider } from './providers/Notification';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as PageRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './providers/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();


root.render(
	<React.StrictMode>
		<NotificationProvider>
		    <Provider store={store}>
			   <PersistGate loading={null} persistor={persistor}>
		            <PageRouter>
		                <QueryClientProvider client={queryClient}>
			                <App />
					        <NotificationSnackbar/>
			            </QueryClientProvider>
		            </PageRouter>
			   </PersistGate>
			</Provider>
		</NotificationProvider>

	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
