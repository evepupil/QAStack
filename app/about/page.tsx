export default function AboutPage() {
  return (
    <div className="container max-w-4xl px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">关于 QAStack</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          QAStack 是一个精心策划的软件测试工具目录，帮助测试人员和开发者发现最好的测试工具和资源。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">我们的使命</h2>
        <p className="text-muted-foreground mb-6">
          我们致力于为软件测试社区提供一个全面、易用的工具目录，帮助团队找到最适合他们需求的测试工具。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">特色功能</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>精心分类的测试工具目录</li>
          <li>详细的工具介绍和使用指南</li>
          <li>按类别和标签筛选工具</li>
          <li>定期更新的工具信息</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">联系我们</h2>
        <p className="text-muted-foreground">
          如果您有任何问题或建议，欢迎通过 GitHub 与我们联系。
        </p>
      </div>
    </div>
  );
}
