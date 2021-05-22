pipeline{

	agent{
		label 'build-agent'
	}
	
	parameters{
		choice(
			description:'''你需要选择哪个模块进行构建?
build-cjiedata 打包到88服务器
build-test 打包到85测试服务器
build-dev 打包到开发服务器
''',
			name:'build_env',
			choices:['build-cjiedata','build-test','build-dev']
		)
	}
	
	options {
		buildDiscarder( logRotator( daysToKeepStr: '3', numToKeepStr: '3', artifactDaysToKeepStr: "5", artifactNumToKeepStr: "5"))
		timeout( time:1, unit: 'HOURS')
	}
	
	stages{
	
		stage('Build-cjiedata'){
			when {
				expression {
					params.build_env == 'build-cjiedata'
				}
			}
			steps{
				nodejs(nodeJSInstallationName:'npm_NodeJS 12.13.1',configId:'cd721b1f-d067-4824-8f51-2a9bee2497c0'){
					sh 'npm install && npm run build-cjiedata'
				}
				sshagent(['6ffa670f-0aa9-4472-ba59-a2d8f044b22c']){
					sh "scp -r dist/* root@192.168.0.88:/usr/local/openresty/nginx/html/epms/epms-o/"
				}
			}
		}
		
		stage('Build-test'){
			when {
				expression {
					params.build_env == 'build-test'
				}
			}
			steps{
				nodejs(nodeJSInstallationName:'npm_NodeJS 12.13.1',configId:'cd721b1f-d067-4824-8f51-2a9bee2497c0'){
					sh 'npm install && npm run build-test'
				}
				sshagent(['6ffa670f-0aa9-4472-ba59-a2d8f044b22c']){
					sh "scp -r dist/* root@192.168.0.85:/usr/local/openresty/nginx/html/epms/epms-o/"
				}
			}						
        }
		
		stage('Build-dev'){
			when {
				expression {
					params.build_env == 'build-dev'
				}
			}
			steps{
				nodejs(nodeJSInstallationName:'npm_NodeJS 12.13.1',configId:'cd721b1f-d067-4824-8f51-2a9bee2497c0'){
					sh 'npm install && npm run build'
				}
				sshagent(['6ffa670f-0aa9-4472-ba59-a2d8f044b22c']){
					sh "scp -r dist/* root@192.168.0.151:/usr/local/openresty/nginx/html/epms/epms-o"
				}
			}						
        }
		
    }
}