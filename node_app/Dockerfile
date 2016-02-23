#Pull from node image version 'argon'
FROM node:argon

#Expose port to connect to 
EXPOSE 3002

#Copy startup script
COPY startup_node.sh /startup_node.sh
#Make sure we have correct permissions
RUN chmod +x /startup_node.sh
#Execute startup script
CMD ["/startup_node.sh"]