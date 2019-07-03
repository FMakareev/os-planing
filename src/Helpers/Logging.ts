

export const Logging = (message: string, type: string) => {
	switch (type) {
		case('error'):{
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
