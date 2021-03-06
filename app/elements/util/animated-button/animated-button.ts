/// <reference path="../../elements.d.ts" />

namespace AnimatedButtonElement {
	export const animatedButtonProperties: {
		cooldown: boolean;
		content: string;
		tap: string;
		raised: boolean;
	} = {
		cooldown: {
			type: Boolean,
			notify: false,
			value: false
		},
		content: {
			type: String,
			notify: true,
			value: ''
		},
		tap: {
			type: String,
			notify: false
		},
		raised: {
			type: Boolean,
			notify: true,
			value: false
		}
	} as any;

	export class AB {
		static is: string = 'animated-button';

		static properties = animatedButtonProperties;

		private static _animationIndex: number = 0;
		private static _isAnimating: boolean = false;

		//Inline this for portability
		private static _wait(this: AnimatedButton, time: number) {
			return new Promise((resolve) => {
				window.setTimeout(() => {
					resolve(null);
				}, time);
			});
		}

		static async doAnimation(this: AnimatedButton) {
			this._isAnimating = true;
			const currentAnimation = ++this._animationIndex;

			this.$.button.classList.add('clicked');
			this.$.contentContainer.classList.add('animate');
			await this._wait(100);
			this.$.contentContainer.classList.add('showcheckmark');

			await this._wait(3000);

			if (this._animationIndex === currentAnimation) {
				this.$.button.classList.remove('clicked');
				this.$.contentContainer.classList.remove('showcheckmark');
				await this._wait(100);
				this.$.contentContainer.classList.remove('animate');

				this._isAnimating = false;
				this._animationIndex = 0;
			}
		}

		static _onclick(this: AnimatedButton, e: Polymer.ClickEvent) {
			if (!this.cooldown || !this._isAnimating) {
				this.doAnimation();

				//Try to find the listener that was added
				if (!this.tap) {
					return;
				}
				const host = this.getRootNode().host as Polymer.RootElement;
				if (this.tap in host) {
					(host[this.tap as keyof typeof host] as (e: Polymer.ClickEvent) => void)(e);
				} else {
					console.warn.apply(console, host._logf(`_createEventHandler`, 
						`listener method ${this.tap} not defined`));
				}
			}
		}

		static ready(this: AnimatedButton) {
			
		};
	}

	if (window.objectify) {
		window.register(AB);
	} else {
		window.addEventListener('RegisterReady', () => {
			window.register(AB);
		});
	}
}

type AnimatedButton = Polymer.El<'animated-button', 
	typeof AnimatedButtonElement.AB & typeof AnimatedButtonElement.animatedButtonProperties>;