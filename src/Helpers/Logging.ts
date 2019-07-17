import * as Sentry from "@sentry/browser";


export const Logging = (message: string, type: string) => {
	switch (type) {
		case('error'):{
			if (process.env.NODE_ENV === 'production') {
				Sentry.captureException(message);
			}
			console.error('[ERROR]: ',message);
			return;
		}
		case('warn'):{
			console.warn('[WARNING]: ',message);
			return;
		}
		case('info'):{
			console.info('[INFO]: ',message);
			return;
		}
		default:{
			console.log('[LOG]: ',message)
		}
	}
};

export default Logging;
