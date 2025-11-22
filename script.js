// Auto-update footer year
      document.getElementById('year').textContent = new Date().getFullYear()

      // Navbar scroll effect
      const navbar = document.getElementById('navbar')
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      })

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const href = this.getAttribute('href')
          if (href === '#') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            return
          }
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        })
      })

      // Scroll to Top Button
      const scrollToTopBtn = document.getElementById('scroll-to-top');

      // Show/hide scroll to top button based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      });

      // Scroll to top when button is clicked
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // GitHub Stats Fetching
      async function fetchGitHubStats() {
        const username = 'sayid2kx';
        const apiUrl = `https://api.github.com/users/${username}`;
        
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch GitHub stats');
          }
          
          const data = await response.json();
          
          // Update stats
          document.getElementById('repo-count').textContent = data.public_repos || '0';
          document.getElementById('followers-count').textContent = data.followers || '0';
          document.getElementById('following-count').textContent = data.following || '0';
          document.getElementById('account-type').textContent = data.type === 'User' ? 'User' : data.type || 'User';
          
          // Fetch total stars (this requires fetching all repos)
          try {
            const reposResponse = await fetch(`${apiUrl}/repos?per_page=100&sort=updated`);
            if (reposResponse.ok) {
              const repos = await reposResponse.json();
              const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
              document.getElementById('stars-count').textContent = totalStars || '0';
              
              // Calculate recent commits (last 30 days approximation)
              const thirtyDaysAgo = new Date();
              thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
              let recentCommits = 0;
              
              // Sample a few repos for commit activity (to avoid rate limits)
              const sampleRepos = repos.slice(0, Math.min(5, repos.length));
              for (const repo of sampleRepos) {
                try {
                  const commitsResponse = await fetch(`${repo.url}/commits?since=${thirtyDaysAgo.toISOString()}&per_page=100`);
                  if (commitsResponse.ok) {
                    const commits = await commitsResponse.json();
                    recentCommits += commits.length;
                  }
                } catch (e) {
                  // Skip if rate limited or error
                }
              }
              
              document.getElementById('commits-count').textContent = recentCommits > 0 ? `${recentCommits}+` : 'Active';
            }
          } catch (error) {
            // If we can't fetch repos, set default values
            document.getElementById('stars-count').textContent = 'Loading...';
            document.getElementById('commits-count').textContent = 'Active';
          }
        } catch (error) {
          console.error('Error fetching GitHub stats:', error);
          // Set fallback values
          document.getElementById('repo-count').textContent = 'N/A';
          document.getElementById('followers-count').textContent = 'N/A';
          document.getElementById('following-count').textContent = 'N/A';
          document.getElementById('stars-count').textContent = 'N/A';
          document.getElementById('commits-count').textContent = 'N/A';
          document.getElementById('account-type').textContent = 'User';
        }
      }

      // Fetch GitHub stats when page loads
      if (document.getElementById('github-stats')) {
        fetchGitHubStats();
      }

