module.exports = {
  apps: [
    {
      name: "webApp-Client",
      script: "npm", // 애플리케이션의 진입점 파일
      args: "run start:prod",
      instances: 1, // 인스턴스 수, "max"로 설정하면 CPU 코어 수에 맞춰 자동으로 설정
      exec_mode: "cluster",
      autorestart: true, // 애플리케이션의 비정상적인 종료 시 자동으로 재시작
      watch: false, // 파일 변경 시 자동으로 재시작할지 여부
      max_memory_restart: "1G", // 메모리 제한을 넘어서면 재시작
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
