# Use it from AI agents (MCP)

The Actor runs as a tool on [Apify's MCP server](https://docs.apify.com/mcp). The `tools` parameter loads only this Actor, so the agent sees one clear tool: `arxrock--meta-ad-library-monitor`.

**Server URL**

```
https://mcp.apify.com?tools=arxrock/meta-ad-library-monitor
```

## Claude Desktop, Cursor, VS Code and other clients

Sign in with OAuth (your browser opens once):

```json
{
  "mcpServers": {
    "ads-monitor": {
      "url": "https://mcp.apify.com?tools=arxrock/meta-ad-library-monitor"
    }
  }
}
```

Or use an Apify API token:

```json
{
  "mcpServers": {
    "ads-monitor": {
      "url": "https://mcp.apify.com?tools=arxrock/meta-ad-library-monitor",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

## Claude Code

```bash
claude mcp add --transport http ads-monitor "https://mcp.apify.com?tools=arxrock/meta-ad-library-monitor"
```

## Prompts that work well

- "Which new Facebook and Instagram ads did these 5 competitors launch since last week? Use monitor name `weekly-competitors`."
- "Find ads about protein powder in the US running for 60+ days and summarize their hooks and offers."
- "Which ads of this brand stopped running this month?"
- "Every Monday, check these pages and send me only what changed."

## Agents that pay for themselves

The Actor is eligible for [Apify agentic payments](https://docs.apify.com/agents/payments): an agent can buy a prepaid token with x402 (USDC on Base or Solana), MPP or Skyfire and run it without anyone creating an Apify account. Price per use is the same as for everybody: $0.20 per 1,000 ads checked, $0.30 per 1,000 result rows and $0.003 per keyword or page.
