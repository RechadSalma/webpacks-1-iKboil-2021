# install  each repo
cd 01javascriptWebpackTemplate/ && \
echo 'iK cd 01javascriptWebpackTemplate/ directory' && \
rm -rfv dist/ && \
echo 'iK01 now removing node_modules/ if any & npm cach clean' && \
rm -rf node_modules/ && npm cache clean -vf &&  \
npm ci && \

cd ../02javascriptWebpackJestTestingTemplate/ && \
echo 'iK cd 02javascriptWebpackJestTestingTemplate/ directory' && \
rm -rfv dist/ && \
echo 'iK02 now removing node_modules/ if any & npm cach clean' && \
rm -rf node_modules/ && npm cache clean -vf && \
npm ci && \

cd ../03reactWebpackTemplate/ && \
echo 'iK cd 03reactWebpackTemplate/ directory' && \
rm -rfv dist/ && \
echo 'iK03 now removing node_modules/ if any & npm cach clean' && \
rm -rf node_modules/ && npm cache clean -vf && \
npm ci && \

cd ../04reactWebpackJestReacttestinglibraryTestingTemplate/ && \
echo 'iK cd 04reactWebpackJestReacttestinglibraryTestingTemplate/ directory' && \
rm -rfv dist/ && \
echo 'iK04 now removing node_modules/ if any & npm cach clean' && \
rm -rf node_modules/ && npm cache clean -vf && \
npm ci && \

# npm outdated each repo so you do know what needs updating & testing
cd ../01javascriptWebpackTemplate/ && \
echo 'iK cd 01javascriptWebpackTemplate/ directory' && \
npm outdated && \

cd ../02javascriptWebpackJestTestingTemplate/ && \
echo 'iK cd 02javascriptWebpackJestTestingTemplate/ directory' && \
npm outdated && \

cd ../03reactWebpackTemplate/ && \
echo 'iK cd 03reactWebpackTemplate/ directory' && \
npm outdated && \

cd ../04reactWebpackJestReacttestinglibraryTestingTemplate/ && \
echo 'iK cd 04reactWebpackJestReacttestinglibraryTestingTemplate/ directory' && \
npm outdated && \

echo 'iK COMPLETE: now update each directory if any & test server is working fine'