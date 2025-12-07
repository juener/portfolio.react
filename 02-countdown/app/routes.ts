import { layout, type RouteConfig, route } from '@react-router/dev/routes'

export default [
	layout('routes/layout.tsx', [
		route('/', 'routes/home/index.tsx'),
		route('/history', 'routes/history/index.tsx'),
	]),
] satisfies RouteConfig
