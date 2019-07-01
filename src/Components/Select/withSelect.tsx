import React from 'react';


const withSelect = (WrappedComponent: React.FC<any>) => () => {
	return class extends React.Component {
		constructor(props: any) {
			super(props);
			this.state = this.initialState;
		}

		get initialState() {
			return {
				value: null,
				meta: {
					active: false
				}
			};
		}

		onChange = (value: any) => {
			this.setState((state: any) => ({
				...state,
				value: value
			}));
			this.onBlur();
		};

		onFocus = () => {
			this.setState((state: any) => ({
				...state,
				meta: {
					active: true
				}
			}));
		};

		onBlur = () => {
			this.setState((state: any) => ({
				...state,
				meta: {
					active: false
				}
			}));
		};

		render() {
			return (
				<WrappedComponent
					{...this.state}
					onChange={this.onChange}
					onBlur={this.onBlur}
					onFocus={this.onFocus}
					{...this.props}
				/>
			);
		}
	};
};
