declare global {
	interface WindowEventMap {
		'ticker:success': CustomEvent;
		'ticker:error': CustomEvent;
		'ticker:stop': CustomEvent;
		'ticker:extend': CustomEvent;
		'player:loadstart': CustomEvent;
		'player:emptied': CustomEvent;
		'player:canplay': CustomEvent;
		'player:aborted': CustomEvent;
		'player:loadeddata': CustomEvent;
		'player:rwd': CustomEvent;
		'ui:mousemove': CustomEvent;
		'ui:touchstart': CustomEvent;
		'ui:pip': CustomEvent;
	}
}
export declare type EventType = keyof GlobalEventHandlersEventMap;
// export declare type SpecificEventListener<K extends EventType> = (evt: GlobalEventHandlersEventMap[K]) => void;
// export declare type CustomEventListener<E extends Event> = (evt: E) => void;
// export declare type WindowEventType = keyof WindowEventMap;
// export declare type SpecificWindowEventListener<K extends WindowEventType> = (evt: WindowEventMap[K]) => void;

export interface User<UserType = Record<string, any>> {
	id: string;
	username: string;
	token: string;
	todos: Todo[] | any;
}

export interface Todo<TodoType = Record<string, any>> {
	id: string;
	name: string;
	done: boolean;
	user_id: string;
}

export interface Group<GroupType = Record<string, any>> {
	id: string;
	name: string;
}

// export interface Session<SessionType = Record<string, any>> {
//   data: SessionType;
//   expires: Date | undefined;
//   update: (updateFn: (data: SessionType) => Partial<SessionType> | Promise<Partial<SessionType>>) => Promise<SessionType>;
//   set: (data?: SessionType) => Promise<SessionType>;
//   refresh: (expires_in_days?: number) => Promise<boolean>;
//   destroy: () => Promise<boolean>;
// }
